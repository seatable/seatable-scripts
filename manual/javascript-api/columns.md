# Column

#### List columns

List all rows of the table/view

```javascript
base.listColumns(table_name, view_name='')
```

##### Example

```javascript
const columns1 = await base.listColumns('Table1')
const columns2 = await base.listColumns('Table1', view_name='default')
```

#### Insert column

Insert/Append column

```javascript
base.insertColumn(table_name, column_name, column_type, column_key='', column_data='')
```

* column_key: the key of column after which the new column will be inserted, it will be appended to the last column by default
* column_type: please refer to [constants](constants.md)
* column_data: config info of column, required for link-type column, optional for other type columns

##### Example

```javascript
import { ColumnTypes } from 'seatable-api';
await base.insertColumn('Table1', 'seatable-api', ColumnTypes.TEXT)
await base.insertColumn('Table1', 'seatable-api', ColumnTypes.TEXT, '0000')
await base.insertColumn('Table1', 'Link1', ColumnTypes.LINK, column_data={
        'table':'Table1',
        'other_table':'Test_User'
    })
```

#### Rename column

Rename a column

```javascript
base.renameColumn(table_name, column_key, new_column_name)
```

##### Example

```javascript
await base.renameColumn('Table1', 'kSiR', 'new-seatable-api')
```

#### Resize column

Set a column width

```javascript
base.resizeColumn(table_name, column_key, new_column_width)
```

##### Example

The default width of a column is 200, if you need to adjust the column width, such as 500

```javascript
await base.resizeColumn('Table1', 'asFV', 500)
```

#### Freeze column

Freeze a column

```javascript
base.freezeColumn(table_name, column_key, frozen)
```

frozen: true/false

##### Example

```javascript
await base.freezeColumn('Table1', '0000', true)
```

#### Move column

```javascript
base.moveColumn(table_name, column_key, target_column_key)
```

* column_key:  the key of the column you want to move

* target_column_key:  is the key of the anchor column, the moved column will be moved to the right of the column

##### Example

```javascript
await base.moveColumn('Table1', 'loPx', '0000')
```

In this example, the 'loPx' column will be moved to the right of the '0000' column

#### Modify column type

Transform a column type

```javascript
base.modifyColumnType(table_name, column_key, new_column_type)
```

column_type please refer to [constants](constants.md)

##### Example

```javascript
import { ColumnTypes } from 'seatable-api';

await base.modifyColumnType('Table1', 'nePI', ColumnTypes.NUMBER)
```

#### Add column options

Used by single-select or multiple-select type columns

```javascript
base.addColumnOptions(table_name, column, options)
```

##### Example

```javascript
await base.addColumnOptions('Table1', 'My choices', [
        {"name": "ddd", "color": "#aaa", "textColor": "#000000"},
        {"name": "eee", "color": "#aaa", "textColor": "#000000"},
        {"name": "fff", "color": "#aaa", "textColor": "#000000"},
])
```

#### Add column cascade settings

Used by single-select column, to add a limitation of child column options according to the option of parent column

```javascript
base.addColumnCascadeSettings(table_name, child_column, parent_column, cascade_settings)
```

* child_column: name of child column
* parent_column: name of parent column

##### Example

```javascript
await base.addColumnCascadeSettings("Table1", "single-op-col-c", "single-op-col", {
  "aaa": ["aaa-1", "aaa-2"], # If “aaa” is selected by parent column, the available options of child column are "aaa-1 and aaa-2"
  "bbb": ["bbb-1", "bbb-2"],
  "ccc": ["ccc-1", "ccc-2"]
})
```

#### Delete column

Delete a column

```javascript
base.deleteColumn(table_name, column_key)
```

##### Example

```javascript
await base.deleteColumn('Table1', 'bsKL')
```
