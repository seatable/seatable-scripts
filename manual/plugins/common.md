# Common api

## getRelatedUsers

Get other users associated with the current base (collaborators of the table, the shared person of the table, etc.)

```javascript
dtable.getRelatedUsers()
```

Example

```javascript
const collaborators = dtable.getRelatedUsers();
```

## getCollaboratorsName

Get a list of names of collaborators

```javascript
dtable.getCollaboratorsName(collaborators, value)
```

Arguments

* collaborators: collaborator list in this base
* value: email list of collaborators

Example

```javascript
const collaborators = dtable.getRelatedUsers();
const value = ['abc@seafile.com', 'shun@seafile.com'];
const name = dtable.getCollaboratorsName(collaborators, value); // 'abc, shun'
```

## getTableFormulaResults

Get the data in the calculation formula column of the table

```javascript
dtable.getTableFormulaResults(table, rows)
```

Arguments

* table: table object
* rows: Need to obtain the row data of the relevant data of the calculation formula column

Example

```javascript
const tableName = 'tableName';
const viewName = 'viewName';
const table = dtable.getTableByName(tableName);
const view = dtable.getViewByName(table, viewName);
const rows = dtable.getViewRows();

const formulaResult = dtable.getTableFormulaResults(table, rows);
```

## getViewRowsColor

Get the color attributes of the row data in the view

```javascript
dtable.getViewRowsColor(rows, view, table)
```

Arguments

* rows: Need to get the row data of the color attribute
* view: view object
* table: table object

Example

```javascript
const tableName = 'tableName';
const viewName = 'viewName';
const table = dtable.getTableByName(tableName);
const view = dtable.getViewByName(table, viewName);
const rows = dtable.getViewRows();

const formulaResult = dtable.getViewRowsColor(rows, view, table);
```

## getLinkCellValue

Get the id list of the row data of the table associated with the row data of other tables

```javascript
dtable.getLinkCellValue(linkId, tableId, otherTableId, rowId)
```

Arguments

* linkId: link The link_id value corresponding to the column
* tableId: The id value of the current table
* otherTableId: The id value of the associated table
* rowId: The id value of the row in the current table

Example

```javascript
const tableName = 'tableName';
const table = dtable.getTableByName(tableName);

const rows = table.rows;
const row = rows[0];

const columnName = 'linkColumn';
const linkColumn = dtable.getColumnByName(table, columnName);
const { link_id, table_id, other_table_id, display_column_key } = linkColumn.data;
const linkedTaleId = table._id === table_id ? other_table_id : table_id;

const linkedRowIds = dtable.getLinkCellValue(link_id, table._id, linkedTableId, row._id);
```


## getLinkDisplayString

Get the content value of the associated row of the link column

```javascript
dtable.getLinkDisplayString(linkedRowIds, linkedTable, displayColumnKey)
```

Arguments

* linkedRowIds: List of associated rows
* linkedTable: Associated table object
* displayColumnKey: Associated column object

Example

```javascript
const tableName = 'tableName';
const table = dtable.getTableByName(tableName);

const rows = table.rows;
const row = rows[0];

const columnName = 'linkColumn';
const linkColumn = dtable.getColumnByName(table, columnName);
const { link_id, table_id, other_table_id, display_column_key } = linkColumn.data;
const linkedTaleId = table._id === table_id ? other_table_id : table_id;

const linkedRowIds = dtable.getLinkCellValue(link_id, table._id, linkedTableId, row._id);
const linkedTable = dtable.getTableById(linkedTableId);

const results = dtable.getLinkDisplayString(linkedRowIds, linkedTable, display_column_key);
```

## getNumberDisplayString

Get the string display of the number column (return user data according to different formats)

```javascript
dtable.getNumberDisplayString(value, columnData)
```

Arguments

* value: The value corresponding to the number type column
* columnData: The data configuration attribute of the corresponding column of the number type column

Example

```javascript
const tableName = 'tableName';
const table = dtable.getTableByName(tableName);
const columnName = 'dateColumn';
const column = dtable.getColumnByName(table, columnName);

const value = 190203;
const name = dtable.getNumberDisplayString(value, column.data);
```

## getGeolocationDisplayString

Get the string display of the geolocation column (return user data according to different configuration parameters)

```javascript
dtable.getGeolocationDisplayString(value, columnData)
```

Arguments

* value: The value corresponding to the geolocation type column
* columnData: The value value corresponding to the geolocation type column The data configuration attribute of the corresponding column geolocation type column

Example

```javascript
const tableName = 'tableName';
const table = dtable.getTableByName(tableName);
const columnName = 'dateColumn';
const column = dtable.getColumnByName(table, columnName);

const value = {country_region: 'Germany'};
const name = dtable.getGeolocationDisplayString(value, column.data);
```

## getDurationDisplayString

Get the string display of the duration column (return user data according to different configuration parameters)

```javascript
dtable.getDurationDisplayString(value, columnData)
```

Arguments

* value: The value corresponding to the duration type column
* columnData: The data configuration attribute of the corresponding column of the duration type column

Example

```javascript
const tableName = 'tableName';
const table = dtable.getTableByName(tableName);
const columnName = 'dateColumn';
const column = dtable.getColumnByName(table, columnName);

const value = '12:30';
const name = dtable.getDurationDisplayString(value, column.data);
```

## getDateDisplayString

Get the string display of the date column (return user data according to different configuration parameters)

```javascript
dtable.getDateDisplayString(value, columnData)
```

Arguments

* value: The value corresponding to the date type column
* columnData: The data configuration attribute of the column corresponding to the date type column

Example

```javascript
const tableName = 'tableName';
const table = dtable.getTableByName(tableName);
const columnName = 'dateColumn';
const column = dtable.getColumnByName(table, columnName);

const value = 'YYYY-MM-DD';
const name = dtable.getDateDisplayString(value, column.data);
```
