# Query-Statements

The table query will become simpler and more efficiency by using the sql-like statements as a paramter in base.filter() function. In different column types, there are a little differences in the query method and the format of input statement. 

## Operators of query method

* **greater-less query:**  >， >， =， <， <=

* **equal-unequal query:**  =， !=， <> (same as !=)

* **fuzzy query:**  like

## Overview

Here is an example based on the code `queryset = base.filter("Table1", "age>18")` 

* age: column name
* \>: operator
* 18: parameter

| Data structure | Column type                                                | Format of greater-less query                                 | Format of equal-unequal query                            | Format of fuzzy query                                        |
| -------------- | ---------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| String         | Text<br />Long Text<br />URL<br />Email<br />Single Select | Unsupported                                                  | String                                                   | combined with "%"<br />%a: end with "a"<br />a%:  start with "a"<br />%a%: contains "a"<br />a%b: start with "a", end with "b" |
| List           | Multiple Select                                            | Unsupported                                                  | String                                                   | Unsupported                                                  |
| Number         | Number                                                     | int, float                                                   | int, float, and empty string ""                          | Unsupported                                                  |
| Date           | Date<br />Created time<br />Last modified time             | Patterns: <br />YYYY-MM-DD<br />YYYY-MM-DD hh<br />YYYY-MM-DD hh:mm<br />YYYY-MM-DD hh:mm:ss | Same patterns as greater-less query                      | Unsupported                                                  |
| Boolean        | Checkbox                                                   | Unsupported                                                  | true, false and empty string "" <br />(case-insensitive) | Unsupported                                                  |

## Examples

### String-based Column

*  Column types include **Text, Long Text, URL, Email, Checkbox**.

```python
# 1. equal-unequal query
base.filter('Table1', "column_name=hello world")
base.filter('Table1', "column_name!=''")

# 2. fuzzy query
base.filter('Table1', "column_name like goo%") #  Find the rows which column name starts with "goo"
base.filter('Table1', "column_name like %eng%") # Find the rows which column name contains "eng"
```

### List-based Column

* Column types include **Multiple Select**

~~~python
# equal-unequal query
base.filter('Table1', "column_name=A and column_name=B") # Find the rows which contains both 'A' and 'B'
~~~

### Number-based Column

* Column types include **Number**

~~~python
# 1. greater-less query
base.filter('Table1', "column_name>18")
base.filter('Table1', "column_name>-10 and column_name<=0")

# 2. equal-unequal query
base.filter('Table1',"column_name<>20")
base.filter('Table1', "column_name=0")
base.filter('Table1',"column_name=''")
~~~

### Date-based Column

* Column types include **Date, Created time, Last modified time**

~~~python
# 1. greater-less query
base.filter('Table1', "column_name>'2020-1-30'")
base.filter('Table1', "column_name>='2019-1-1 5:30' and column_name<='2019-5-1 6'")

# 2. equal-unequal query
base.filter('Table1', "column_name='2020-1-1 10:59:59'")
base.filter('Table1', "column_name!=''")
~~~

**Note that please use the quotes "" when making the date-time query**

### Boolean-based Column

* Column types include **Checkbox**

~~~python
# equal-unequal query
base.filter('Table1','column_name=False') # Same as base.filter('Table1', "column_name=''")
base.filter('Table1', "column_name=True")
~~~
