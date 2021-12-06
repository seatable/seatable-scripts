# SQL in SeaTable

You can use SQL to query data in SeaTable. If some tables in a base are archived, archived rows are also queried, as well as rows that are not archived yet.

## Supported SQL Syntax

Currently only `select` statements are supported. Select syntax below is supported:

```
SELECT [DISTINCT] fields FROM table_name [WhereClause] [GroupByClause] [HavingClause] [OrderByClause] [Limit Option]
```

Notes:

* Selecting from multiple tables (`JOIN`) is not supported.
* Most SQL syntax can be used in where clause, including arithmetic expressions, comparison operators, `[NOT] LIKE`, `IN`, `BETWEEN ... AND ...`, `AND`, `OR`, `NOT`, `IS [NOT] TRUE`, `IS [NOT] NULL`.
    * Arithmetic expressions only support numbers.
    * `LIKE` only supports strings. The key word `ILIKE` can be used instead of `LIKE` to make the match case-insensitive.
    * `BETWEEN ... AND ...` only supports numbers and time. Time constants should be strings in ISO format (e.g. "2020-09-08 00:11:23").
* `GROUP BY` uses strict syntax. The selected fields must appear in group by list, except for aggregation functions (`COUNT`, `SUM`, `MAX`, `MIN`, `AVG`) and formulas (see extended syntax section below).
* `HAVING` filters rows resulting from the group by clause. Only selected fields or aggregation functions can be referenced in having clause. Other syntax is the same as specified for the where clause.
* Fields in "order by" list must be a column or an expression in the selected fields. For example, `select a from table order by b` is invalid; while `select a from table order by b` and `select abs(a), b from table order by abs(a)` are valid.
* Limit options are in MySQL format. The general syntax is `OFFSET ... LIMIT ...`. You may obmit `OFFSET` or `LIMIT`.

Each returned row is a JSON map. The key is the column key, NOT column name.

## Data Types

Below is mapping from SeaTable column types to SQL column types.

| SeaTable Column Type        | SQL Column Type           |
| :------------------- | :-------------------- |
| text                 | String                |
| long-text            | String                |
| number          | Float                |
| single-select   | String. When used in where clause, you should refer an option by its name. E.g. `where single_select = "New York"`. Returned rows contain the option key by default. To return the option name, the `convert_keys` parameter (available since version 2.4) in query request should be TRUE. |
| multiple-select | List of strings. When used in where clause, you should refer an option by its name. E.g. `where multi_select = "New York"`. Returned rows contain the option key by default. To return the option name, the `convert_keys` parameter (available since version 2.4) in query request should be TRUE. |
| checkbox        | Bool.     |
| date            | Datetime. Constants are expressed in strings in ISO format. e.g. "2006-1-2" or "2006-1-2 15:04:05".|
| image            | List of URL for images  |
| file            | Cannot be used in where clause. Will be returned as JSON format string when queried. |
| collaborator   | List of user IDs. Format is like 5758ecdce3e741ad81293a304b6d3388@auth.local. If you need user names, you have to convert with seatable APIs. |
| link to other records          | List of linked rows. Since version 2.4, it can be referenced in the where clause by `=`, `IN`, `HAS ANY OF`, `HAS ALL OF`, `HAS NONE OF`, `IS EXACTLY`, and `IS NULL` operators. The display value of linked rows will be calculated and returned. Up to 10 linked rows will be returned, which is sorted by the creation time of the linked rows. If the type of display value is string, `LIKE`, `ILIKE` are also supported. |
| formula              | The type depends on the return value of the formula. |
| \_creator            | User ID as stirng. |
| \_ctime              | Datetime |
| \_last_modifier      | User ID as string. |
| \_mtime              | Datetime  |
| auto number          | String |
| url                  | String |
| email                | String |
| duration             | Float |

In a where clause, if a list type is compared against a string, it will be evaluated to true when anyone of the strings matches the condition. Types such as collaborator, multi-select are mapped to a string list. For example, `SELECT * FROM tb3 where multi_select ='select 1' and multi_select='select 2'` if a cell in the column `multi-select` contains both 'select 1' and 'select 2'.

## Extended Syntax

### Use Formulas in SQL Query

You may use a formula syntax that's almost the same as SeaTable's formulas in SQL queries. There are a few special notes:

* Link formulas are not supported. e.g. {link.age} is invalid.
* Reference to columns should not be enclosed by curly brackets ("{}"). Don't write `select abs({column}) from talbe;`. Wirte `select abs(column) from table;`. This is consistent with standard SQL syntax.
* You can use back quote ("\`\`") to enclose column references, when column name contains space or "-". E.g. select abs(`column-a`) from table;
* You may not use column alias in formulas. E.g. `select abs(t.column) from table as t;` is invalid.
* formulas can be use in group by and order by clauses.

A few extended formulas are supported:

* `STARTOFWEEK(date, weekStart)`: returns the first day of the week where "date" is in. "weekstart" can be used to choose "sunday" or "monday" as the first day of a week.
* `Quarter(date)`: Returns the quater of the date. Return value is 1, 2, 3 or 4.
* `ISODate(date)`: Returns ISO format string for the date. E.g. "2020-09-08".
* `ISOMonth(date)`: Returns ISO format string for the month where "date" is in. E.g. "07".

The above formulas can be used for group by week, quater, date and month. E.g. `select sum(sale) from SalesRecord group by ISODate(SalesTime);` will return the total sales amount for each day.

For more details, please refer to \[./function.md].

### Querying String Lists

Collaborators and Multiple Select are mapped to string lists type. The SeaTable UI supports a few special filters for such types. They are `HAS ANY OF`, `HAS ALL OF`, `HAS NONE OF`, `IS EXACTLY`. You may also use the same syntax to filter such columns with SQL.

For example, if column "city" is of type multi-select, and we want to find out all rows that contains "New York" or "Paris" in the "city" column, you can query: `select * from table where city has any of ("New York", "Paris");`. The list of string constant are enclosed with brackets, just like the syntax for `IN`.
