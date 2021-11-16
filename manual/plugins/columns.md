# Columns

## getColumns

Get all the columns of the table

```javascript
dtable.getColumns(table);
```

Arguments

* table: table object

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const columns = dtable.getColumns(table);
```

## getShownColumns

Get the contents of all displayed columns of the view (excluding hidden columns)

```javascript
dtable.getShownColumns(table, view);
```

Arguments

* table: table object
* view: view objects in the table

Example

```javascript
const tableId = '0000';
const viewId = '0000';
const table = dtable.getTableById(tableId);
const view = dtable.getViewById(table, viewId);
const shownColumns = dtable.getShownColumns(table, view);
```

## getColumnsByType

Get all the same type of column in the table

```javascript
dtable.getColumnsByType(table, type);
```

Arguments

* table:  table object
* type: get the type of column

Example

```javascript
import { CELL_TYPE } from 'dtable-sdk';

const tableId = '0000';
const table = dtable.getTableById(tableId);
const columnType = CELL_TYPE.TEXT;
const sameTypeColumns = dtable.getColumnsByType(table, columnType);
```

## getColumnByName

Get column by name

```javascript
dtable.getColumnByName(table, columnName);
```

Arguments

* table:  table object
* columnName: the name of the column

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const columnName = 'columnName';
const column = dtable.getColumnByName(table, columnName);
```

## getColumnByKey

Get column by key

```javascript
dtable.getColumnByKey(table, columnKey);
```

Arguments

* table:  table object
* columnKey: the key value of the column

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const columnKey = '0000';
const column = dtable.getColumnByKey(table, columnKey);
```

## modifyColumnData

Update the data attribute of the column

```javascript
dtable.modifyColumnData(table, columnName, columnData);
```

Arguments

* table:  table object
* columnName: the name of the column
* columnData: the new data attribute of the column

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const columnName = 'dateColumn';
const data = {
  format: 'YYYY-MM-DD'
};
dtable.modifyColumnData(table, columnName, data);
```
