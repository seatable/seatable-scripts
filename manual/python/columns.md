# Column

This document will show how the columns are operated by Base Object

If you do not yet understand the Base object, please refer to this document

* [Base](base.md)

#### list columns

List all rows of the table/view

```python
base.list_columns(table_name, view_name=None)
```

##### Example

```python
base.list_columns('Table1')
base.list_columns('Table1', view_name='default')
```

#### insert column

Insert/Append column

```python
base.insert_column(table_name, column_name, column_type, column_key=None)
```

`column_key` is the key of the previous column at the position to be inserted, if omitted, it will be appended as the last column by default

column_type please refer to [constants](constants.md)

##### Example

```python
from seatable_api.constants import ColumnTypes
base.insert_column('Table1', 'python-api', ColumnTypes.TEXT)
base.insert_column('Table1', 'python-api', ColumnTypes.TEXT, column_key=ColumnTypes.TEXT)
```

#### rename column

Rename the column

```python
base.rename_column(table_name, column_key, new_column_name)
```

##### Example

```python
base.rename_column('Table1', 'kSiR', 'new-python-api')
```

#### resize column

Set the column width

```python
base.resize_column(table_name, column_key, new_column_width)
```

##### Example

The default width of a column is 200, if you need to adjust the column width, such as 500

```python
base.resize('Table1', 'asFV', 500)
```

#### freeze column

Freeze the column

```python
base.freeze_column(table_name, column_key, frozen)
```

frozon: True/False

##### Example

```python
base.freeze_column('Table1', '0000', True)
```

#### move column

```python
base.move_column(table_name, column_key, target_column_key)
```

column_key is the key of the column you want to move

target_column_key is the key of the anchor column, the moved column will be moved to the right of the column

##### Example

```python
base.move_column('Table1', 'loPx', '0000')
```

In this example, the 'loPx' column will be moved to the right of the '0000' column

#### modify column type

Transform the column type

```python
base.modify_column_type(table_name, column_key, new_column_type)
```

column_type please refer to [constants](constants.md)

##### Example

```python
from seatable_api.constants import ColumnTypes

base.modify_column_type('Table1', 'nePI', ColumnTypes.NUMBER)
```

#### delete column

Delete the column

```python
base.delete_column(table_name, column_key)
```

##### Example

```python
base.delete_column('Table1', 'bsKL')
```

