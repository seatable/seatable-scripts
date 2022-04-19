# SQL in SeaTable

You can use SQL to query data in SeaTable. If some tables in a base are archived, archived rows are also queried, as well as rows that are not archived yet.

## Supported SQL Syntax

Currently only `select`, `insert`, `update`, and `delete` statements are supported. (`insert`, `update`, and `delete` statements require version 2.7 or later)

The synatx of `select` statement is:

```
SELECT [DISTINCT] fields FROM table_name [WhereClause] [GroupByClause] [HavingClause] [OrderByClause] [Limit Option]
```

Notes:

* Selecting from multiple tables (`JOIN`) is not supported.
* Most SQL syntax can be used in where clause, including arithmetic expressions, comparison operators, `[NOT] LIKE`, `IN`, `BETWEEN ... AND ...`, `AND`, `OR`, `NOT`, `IS [NOT] TRUE`, `IS [NOT] NULL`.
    * Arithmetic expressions only support numbers.
    * `LIKE` only supports strings. The key word `ILIKE` can be used instead of `LIKE` to make the match case-insensitive.
    * `BETWEEN ... AND ...` only supports numbers and time.
    * Time constants should be strings in ISO format (e.g. "2020-09-08 00:11:23"). Since 2.8 version, strings in RFC 3339 format are supported (such as "2020-12-31T23:59:60Z").
* `GROUP BY` uses strict syntax. The selected fields must appear in group by list, except for aggregation functions (`COUNT`, `SUM`, `MAX`, `MIN`, `AVG`) and formulas (see extended syntax section below).
* `HAVING` filters rows resulting from the group by clause. Only fields referred in the "GROUP BY" clause or aggregation functions (such as "SUM") can be used in having clause. Other syntax is the same as specified for the where clause.
* Fields in "order by" list must be a column or an expression in the selected fields. For example, `select a from table order by b` is invalid; while `select a from table order by b` and `select abs(a), b from table order by abs(a)` are valid.
* Limit options are in MySQL format. The general syntax is `OFFSET ... LIMIT ...`. You may obmit `OFFSET` or `LIMIT`.
* Field alias with `AS` syntax is supported. For example, `select table.a as a from table` returns rows whose first column is keyed by "a". There are two notes:
    * Field alias can be referred in `group by`, `having` and `order by` clauses. E.g., `select t.registration as r, count(*) as c from t group by r having c > 100` is valid.
    * Field alias cannot be referred in `where` clause. E.g., `select t.registration as r, count(*) from t group by r where r > "2020-01-01"` will report syntax error.

Each returned row is a JSON map. The keys of the maps are the column keys, NOT column names. To use column names as keys, the `convert_keys` parameter (available since version 2.4) in query request should be TRUE.

The synatx of `insert`, `update`, and `delete` statements are:

```
INSERT INTO table_name [column_list] VALUES value_list [, ...]

UPDATE table_name SET column_name = value [, ...] [WhereClause]

DELETE FROM table_name [WhereClause]

```

* `column_list` is a list of column names surrounded by parentheses. If omitted, it defaults to all updatable columns.
* `value_list` is a list of values surrounded by parentheses. Values must be in the same order as the column list, for example: `(1, "2", 3.0)`.
* Multivalued columns, such as multiple-select column type, requires values to be surrounded by parentheses, for example: `(1, "2", 3.0, ("foo", "bar"))`.
* Values of single-select and multiple-select column types must be option names, not option keys.
* `WhereClause` is optional. If omitted, all rows in the table are included.

Note: these column types are *not* allowed to insert or update:

* built-in columns, such as `_id`, `_ctime`.
* image, file, formula, link, link-formula, geolocation, auto-number, button

## Data Types

Below is mapping from SeaTable column types to SQL column types.

| SeaTable Column Type        | SQL Column Type           | Query result format | Use in WHERE clause | Use in GROUP BY / ORDER BY clause |
| :------------------- | :-------------------- | :------------------------------- | :------------------------------------ | :----------------------------------- |
| text                 | String                |                                  |  Supported                            | Supported.                           |
| long-text            | String                | Raw text in Markdown formst      |  Supported                            | Supported                            |
| number          | Float                |                                        |  Supported                            | Supported                            |
| single-select   | String | Returned rows contain the option key by default. To return the option name, the `convert_keys` parameter (available since version 2.4) in query request should be TRUE. | Refer an option by its name. E.g. `where single_select = "New York"`. | Order by option keys, not option names |
| multiple-select | List of strings | Returned rows contain the option key by default. To return the option name, the `convert_keys` parameter (available since version 2.4) in query request should be TRUE. | Refer an option by its name. E.g. `where multi_select = "New York"`. More details in "List Types" section below. | More details in "List Types" section below. |
| checkbox        | Bool     |                 | Supported                            | Supported                                      |
| date            | Datetime | Time strings in RFC 3339 format | Constants are expressed in strings in ISO format. e.g. "2006-1-2" or "2006-1-2 15:04:05". Since 2.8 version, strings in RFC 3339 format are supported (such as "2020-12-31T23:59:60Z"). | Supported  |
| image            | List of URL for images  | A JSON array with image URLs as elements | Supported. More details in "List Types" section below. | Supported. More details in "List Types" section below. |
| file            | Will be returned as JSON format string when queried. | Not supported | Not Supported | Not Supported |
| collaborator   | List of user IDs | Format is like 5758ecdce3e741ad81293a304b6d3388@auth.local. If you need user names, you have to convert with seatable APIs. | Supported. More details in "List Types" section below. | Supported. More details in "List Types" section below. |
| link to other records          | List of linked rows | Supported. More details in "List Types" section below. | Supported. More details in "List Types" section below. | Supported. More details in "List Types" section below. |
| formula              | The type depends on the return value of the formula. | Depends on the type of the return value | Depends on the type of the return value | Depends on the type of the return value |
| \_creator            | User ID as stirng | Format is like 5758ecdce3e741ad81293a304b6d3388@auth.local. If you need user names, you have to convert with seatable APIs. | Supported | Supported |
| \_ctime              | Datetime | Time strings in RFC 3339 format | Constants are expressed in strings in ISO format. e.g. "2006-1-2" or "2006-1-2 15:04:05". Since 2.8 version, strings in RFC 3339 format are supported (such as "2020-12-31T23:59:60Z"). | Supported  |
| \_last_modifier      | User ID as string | Format is like 5758ecdce3e741ad81293a304b6d3388@auth.local. If you need user names, you have to convert with seatable APIs. | Supported | Supported |
| \_mtime              | Datetime  | Time strings in RFC 3339 format | Constants are expressed in strings in ISO format. e.g. "2006-1-2" or "2006-1-2 15:04:05". Since 2.8 version, strings in RFC 3339 format are supported (such as "2020-12-31T23:59:60Z"). | Supported  |
| auto number          | String |                                  |  Supported                            | Supported.                           |
| url                  | String |                                  |  Supported                            | Supported.                           |
| email                | String |                                  |  Supported                            | Supported.                           |
| duration             | Float | Returned in the unit of seconds   | Supported                             | Supported.                           |

### List Types

In SeaTable, two categories of column types are list types:

* Built-in list types: including multiple selection, image, collaborator, and link to other records.
* Return values for the following link formulas: formula columns whose formula is `{link.column}` or `lookup`; link formula columns whose formula is `lookup`, `findmin` or `findmax`.

When referring a column with list type in `where` conditions, the following rules apply, depending on the type for the list elements. (If an operator is not listed below, it's unsupported.)

| Element Type      | Operator                            | Rule                                                                        |
| :-------- | :----------------------------- | :------------------------------------------------------------------------ |
| string    | IN, extended list operators (e.g. `has any of`) | Follow the rules of the operator.                                                              |
| string    | LIKE, ILIKE                    | If there is only 1 element, use that element; If there are more than 1 elements, only return `true` for `!=` operator; If there is no element, use "".         |
| string    | IS NULL                        | Return `true` when the list is empty or no data in the cell.                                                      |
| string    | =, !=                          | If there is only 1 element, use that element; otherwise only return `true` for `!=` operator. |
| float     | IN, extended list operators (e.g. `has any of`) | Follow the rules of the operator.                                                              |
| float     | =, !=, \<, \<=, >, >=, between | If there is only 1 element, use that element; otherwise only return `true` for `!=` operator. |
| float     | IS NULL                        | Return `true` when the list is empty or no data in the cell.                                                    |
| float     | Arithmetics such as \+/-/\*//  | Use the first element for calculation.                                                       |
| Datetime      | IN, extended list operators (e.g. `has any of`) | Follow the rules of the operator.                                            |
| Datetime      | =, !=, \<, \<=, >, >=, between | If there is only 1 element, use that element; otherwise only return `true` for `!=` operator. |
| Datetime      | IS NULL                        | Return `true` when the list is empty or no data in the cell.                                  |
| bool      | IS TRUE                        | If there is only 1 element, use that element; otherwise return `false`. |
| linked record |                                | Follow the rules for the type of the display column.                                          |

When a list column is returned in a selected field, only the first 10 elements are returned.

When used in `group by` or `order by` clauses, the elements for each list will first be sorted in ascending order, then the lists will be sorted by the rules below:

* Compare the elements one by one, list with smaller element is sorted before list with larger element.
* If all elements compared in step 1 are equal, shorter list is sorted before longer list.
* Otherwise the tow lists are equal.

If a list column is passed as parameter to a formula, and the parameter expects a scalar value, the first element will be used. And if the element is a linked record, the value of its display column will be used.

When applying aggregate functions (min, max, sum, avg) to a list column, if there is only 1 element in the list, use that element; otherwise this row will not be aggregated.

### NULL Values

NULL value is distinct from 0. It represents a missing value. The following values are treated as NULL:

* Values which cannot be converted to the column type will be treated as NULL.
* Empty strings ("") will be treated as NULL too. This is different from standard SQL.
* Lists are treated as NULL based on the rules described in the "List Types" section.
* Functions or formula columns that return error will be treated as NULL.

In the `Where` clause:

* Arithmetic operations (+, -, * etc.) on NULL values will return NULL.
* `!=`, `NOT LIKE`, `NOT IN`, `NOT BETWEEN`, `HAS NONE OF`, `IS NOT TRUE`, and `IS NULL` operations will return true when the value is NULL.
* `AND`, `OR`, `NOT` treat NULL values as false.
* Aggregate functions (min, max, sum, avg) will ignore NULL values.

In formulas, NULL values will be converted to 0 or an empty strings.

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

### Extended List Operators

Some column types in SeaTable have list values. The SeaTable UI supports a few special filters for such types. They are `HAS ANY OF`, `HAS ALL OF`, `HAS NONE OF`, `IS EXACTLY`. You may also use the same syntax to filter such columns with SQL.

For example, if column "city" is of type multi-select, and we want to find out all rows that contains "New York" or "Paris" in the "city" column, you can query: `select * from table where city has any of ("New York", "Paris");`. The list of string constant are enclosed with brackets, just like the syntax for `IN`.
