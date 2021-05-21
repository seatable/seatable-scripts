# Column

#### List columns

List all rows of the table/view

```python
base.list_columns(table_name, view_name=None)
```

##### Example

```python
base.list_columns('Table1')
base.list_columns('Table1', view_name='default')
```

#### Insert column

Insert/Append column

```python
base.insert_column(table_name, column_name, column_type, column_key=None, column_data=None)
```

* column_key: the key of column after which the new column will be inserted, it will be appended to the last column by default
* column_type: please refer to [constants](constants.md)
* column_data: config info of column, required for link-type column, optional for other type columns

##### Example

```python
from seatable_api.constants import ColumnTypes
base.insert_column('Table1', 'python-api', ColumnTypes.TEXT)
base.insert_column('Table1', 'python-api', ColumnTypes.TEXT, column_key=ColumnTypes.TEXT)
base.insert_column('Table1', 'Link', ColumnTypes.LINK, column_data={
        'table':'Table1',
        'other_table':'Test_User'
    })
```

#### Rename column

Rename a column

```python
base.rename_column(table_name, column_key, new_column_name)
```

##### Example

```python
base.rename_column('Table1', 'kSiR', 'new-python-api')
```

#### Resize column

Set a column width

```python
base.resize_column(table_name, column_key, new_column_width)
```

##### Example

The default width of a column is 200, if you need to adjust the column width, such as 500

```python
base.resize('Table1', 'asFV', 500)
```

#### Freeze column

Freeze a column

```python
base.freeze_column(table_name, column_key, frozen)
```

frozon: True/False

##### Example

```python
base.freeze_column('Table1', '0000', True)
```

#### Move column

```python
base.move_column(table_name, column_key, target_column_key)
```

* column_key:  the key of the column you want to move

* target_column_key:  is the key of the anchor column, the moved column will be moved to the right of the column

##### Example

```python
base.move_column('Table1', 'loPx', '0000')
```

In this example, the 'loPx' column will be moved to the right of the '0000' column

#### Modify column type

Transform a column type

```python
base.modify_column_type(table_name, column_key, new_column_type)
```

column_type please refer to [constants](constants.md)

##### Example

```python
from seatable_api.constants import ColumnTypes

base.modify_column_type('Table1', 'nePI', ColumnTypes.NUMBER)
```

#### Add column options

Used by single-select or multiple-select type columns

```
add_column_options(self, table_name, column, options)
```

##### Example

```python
base.add_column_options('Table1', 'My choices', [
        {"name": "ddd", "color": "#aaa", "textColor": "#000000"},
        {"name": "eee", "color": "#aaa", "textColor": "#000000"},
        {"name": "fff", "color": "#aaa", "textColor": "#000000"},
])
```

#### Delete column

Delete a column

```python
base.delete_column(table_name, column_key)
```

##### Example

```python
base.delete_column('Table1', 'bsKL')
```

