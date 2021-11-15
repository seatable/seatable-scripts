# Rows

## appendRow

Add row data

```javascript
dtable.appendRow(table, rowData, view, { collaborators } = {});
```

Arguments

* table: table object
* rowData: data of row
* view: view object, can be null
* { collaborators } : Object parameter containing the list of collaborators

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
const viewName = 'Default View'
const view = dtable.getViewByName(table, viewName);
const collaborators = dtable.getRelatedUsers();
const rowData = {
  'Name': 'Mike',
  'Age': 28,
  'Job': 'Software engineer'
};
dtable.appendRow(table, rowData, view, { collaborators });
```

## deleteRowById

Delete the data of row of the table by id

```javascript
dtable.deleteRowById(table, rowId);
```

Arguments

* table: table object
* rowId: Delete the id value of the row

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
const viewName = 'Default View'
const view = dtable.getViewByName(table, viewName);

const rows = dtable.getViewRows(view, table);
const rowId = rows[0]._id;

dtable.deleteRowById(table, rowId);
```

## deleteRowsByIds

Delete multiple data of row of tables through the id list

```javascript
dtable.deleteRowsByIds(table, rowIds);
```

Arguments

* table: table object
* rowIds: Delete the id list of multiple data of row

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
const viewName = 'Default View';
const view = dtable.getViewByName(table, viewName);

const rows = dtable.getViewRows(view, table);
const rowIds = rows.map(row => row._id);

// Delete the first five data of row
dtable.deleteRowsByIds(table, rowIds.slice(0, 5));
```

## modifyRow

Get column content by name

```javascript
dtable.modifyRow(table, row, updated);
```

Arguments

* table: table object
* row: row object
* updated: New parameter value object

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
const viewName = 'Default View'
const view = dtable.getViewByName(table, viewName);

const rows = dtable.getViewRows(view, table);
const rowId = rows[0];
const updated = {
  'Age': 30,
  'Job': 'Teacher'
};
dtable.modifyRow(table, row, updated);
```

## forEachRow

Traverse the data of row and complete the corresponding business logic according to certain conditions

```javascript
dtable.forEachRow(tableName, viewName, callback, { username, userId } = {});
```

Arguments

* tableName: table bane
* viewName: view name
* callback: Callback function, processing custom business logic
* { username, userId }: Object parameters containing user name and user id

Note: username, userId: can be read from the local configuration file in the development environment, and read from window.dtable in the integrated environment

Example

```javascript
import { username, userId } from 'setting.local';

// const { username, userId } = window.dtable;

// Business requirement: If the "task status" column in the data of row is "completed", set the "qualified" column in the changed row to "yes"
const tableName = 'Table1';
const viewName = 'Default View'
dtable.forEachRow(tableName, viewName, (row) => {
  // Realize business needs
  if (row['task status'] === 'completed') {
    const table = dtable.getTableByName(tableName);
    const updated = {'qualified': 'yes'};
    dtable.modifyRow(table, row, updated);
  }
}, {username, userId});
```

## getTableLinkRows

Get the id value of all data of row related to other tables of data of row

```javascript
dtable.getTableLinkRows(rows, table);
```

Arguments

* rows: data of row
* table: data of row belongs to the table object

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
const viewName = 'Default View'
const view = dtable.getViewByName(table, viewName);

const rows = dtable.getViewRows(view, table);

const findLinkRows = rows.slice(0, 5);
dtable.getTableLinkRows(finLinkRows, table);
```

## getViewRows

Get the data of row of the view

```javascript
dtable.getViewRows(view, table);
```

Arguments

* view: view object
* table: table object

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
const viewName = 'Default View'
const view = dtable.getViewByName(table, viewName);

const rows = dtable.getViewRows(view, table);
```

## getGroupRows

Get the data of group rows

```javascript
dtable.getGroupRows(view, table);
```

Arguments

* view: view object
* table: table object

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
const viewName = 'Default View'
const view = dtable.getViewByName(table, viewName);

const rows = dtable.getViewRows(view, table);
```

## getInsertedRowInitData

Get the default data of the new row (if the table contains sorting, group, filtering and other functions, you can directly get the default value of the new row through the api)

```javascript
dtable.getInsertedRowInitData(view, table, rowId);
```

Arguments

* view: view object
* table: table object
* rowId: The id value of the row before the new row

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
const viewName = 'Default View'
const view = dtable.getViewByName(table, viewName);

const rows = dtable.getViewRows(view, table);
const prevRow = rows[row.length - 1];

const defaultRowData = dtable.getInsertedRowInitData(view, table, prevRow._id);
```

## getRowsByID

Get the relevant data of row of the table through the id list

```javascript
dtable.getRowsByID(tableId, rowIds);
```

Arguments

* tableId: Id value of the table
* rowIds: the id list of the row

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
const rowIds = ['aaa', 'bbb', 'cccc', 'dddd'];
const rows = dtable.getRowsByID(table._id, rowIds);
```

## getRowById

Get the relevant data of row of the table through row id

```javascript
dtable.getRowById(table, rowId);
```

Arguments

* table: table object
* rowId: Find the id value of the row

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
const rowId = 'aaaa';
const rows = dtable.getRowById(table, rowId);
```

## moveGroupRows

Move the rows in the group

```javascript
dtable.moveGroupRows(table, targetIds, movePosition, movedRows, upperRowIds, updated, oldRows, groupbyColumns);
```

Arguments

* table: table object
* targetIds: List of ids of the line where the line is moved
* movePosition:  Relative position of movement, move_above | move_below
* movedRows: Moved data of row list
* upperRowIds: List of the ids of the previous row where all the moved rows were before
* updated: The new attribute value object that needs to be updated after moving the row (moving across the group, the movement of different filter conditions may cause the data to change)
* oldRows: The old attribute value object that needs to be updated before moving the row
* groupbyColumns: Column data of the current view Group

Example

```javascript
const tableName = 'Table1';
const table = dtable.getTableByName(tableName);
// 1. Assumption: The default data of row list is as follows, group according to the Group column
const rows = [
  {_id: 'aaa', 'Name', 'Mike', 'Age': '29', 'Birthday': '1992-09-09', 'Group': 'a'},
  {_id: 'bbb', 'Name', 'Tom', 'Age': '25', 'Birthday': '1996-09-09', 'Group': 'a'},
  {_id: 'ccc', 'Name', 'Doris', 'Age': '24', 'Birthday': '1997-09-09', 'Group': 'a'},
  {_id: 'ddd', 'Name', 'Judy', 'Age': '22', 'Birthday': '1993-09-09', 'Group': 'a'},
  {_id: 'eee', 'Name', 'Tony', 'Age': '27', 'Birthday': '1992-09-09', 'Group': 'b'},
  {_id: 'fff', 'Name', 'Michael', 'Age': '25', 'Birthday': '1990-09-09', 'Group': 'b'},
  {_id: 'ggg', 'Name', 'Donald', 'Age': '26', 'Birthday': '1996-09-09', 'Group': 'b'},
  {_id: 'hhh', 'Name', 'Jerry', 'Age': '27', 'Birthday': '1999-09-09', 'Group': 'b'},
];

// 2. Move Tom and Judy to the bottom of the Jerry row, the relevant parameters are as follows
const targetIds = ['hhh', 'hhh'];
const move_position = 'move_below';
const movedRows = [
  {_id: 'bbb', 'Name', 'Tom', 'Age': '25', 'Birthday': '1996-09-09', 'Group': 'a'},
  {_id: 'ddd', 'Name', 'Judy', 'Age': '22', 'Birthday': '1993-09-09', 'Group': 'a'},
];
const upperRowIds = ['aaa', 'ccc'];
const updated = {
  'bbb': {'Group': 'b'},
  'ddd': {'Group': 'b'},
};
const oldRows = {
  'bbb': {'Group': 'a'},
  'ddd': {'Group': 'a'},
};

const groupbyColumns = [{key: 'Group', name: 'Group', type: 'text', ...}];

const rows = dtable.moveGroupRows(table, targetIds, movePosition, movedRows, upperRowIds, updated, oldRows, groupbyColumns);
```

