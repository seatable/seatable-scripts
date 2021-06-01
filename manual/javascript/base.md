# Base object

Base object provide a way to manipulate data in a base.

## Table

#### getActiveTable

Get the currently selected table and return a table object

##### Example

```javascript
 const table = base.getActiveTable();
 output.markdown(`#### ${table.name}`);

```

#### getTables

Get all tables

##### Example

```javascript
const tables = base.getTables();
output.text(tables.length);

```

#### getTableByName

Get a table object via its name

```javascript
const table = base.getTableByName(tableName: String);
```

##### Example

```javascript
const table = base.getTableByName('Table1');
output.text(table._id);

```

#### addTable

Add a table

```javascript
base.addTable(tableName: String);

```

##### Example

```javascript
base.addTable('New table');

```

#### renameTable

Rename a table

```javascript
base.renameTable(oldName: String, newName: String);

```

##### Example

```javascript
base.renameTable('Old name', 'New name');

```

#### deleteTable

Delete a table

```javascript
base.deleteTable(tableName: String);

```

##### Example

```javascript
base.deleteTable('Old table');

```

## View

#### getActiveView

Get the current view, the method return a view object

##### Example

```javascript
const view  = base.getActiveView();
output.text(view._id);

```

#### getViews

Get all the views of the current table, and return all the views in an array

```javascript
const views = base.getViews(table: Object/String);
```

##### Example

```javascript
const table  = base.getTableByName('Table1');
const views = base.getViews(table);
output.text(views.length);
```

```javascript
const views = base.getViews('Table1');
output.text(views.length);
```

#### getViewByName

Get a view object via its name, and return a view object

```javascript
const view = base.getViewByName(table: Object/String, viewName: String);
```

##### Example

```javascript
const table  = base.getTableByName('Table1'); 
const view = base.getViewByName(table, 'view 1');
output.text(view.name);
```

```javascript
const view = base.getViewByName('Table1', 'view 1');
output.text(view.name);
```

#### addView

Add a view to a table

```javascript
base.addView(table: Object/String, viewName: String);
```

##### Example

```javascript
const table  = base.getTableByName('Table1');
base.addView(table, 'view 2');
```

```javascript
base.addView('Table1', 'view 2');
```

#### renameView

Rename a view in the table

```javascript
base.renameView(table: Object/String, currentViewName: String, nextViewName: String);
```

##### Example

```javascript
const table  = base.getTableByName('Table1');
base.renameView(table, 'view1', 'view2');
```

```javascript
base.renameView('Table1', 'view1', 'view2');
```

#### deleteView

Delete a view

```javascript
base.deleteView(table: Object/String, viewName: String);
```

##### Example

```javascript
const table  = base.getTableByName('Table1');
base.deleteView(table, 'view2');
```

```javascript
base.deleteView('Table1', 'view2');
```

## Column

#### getColumns

Get all the columns in the table, and return all the column objects in an array

```javascript
const columns = base.getColumns(table: Object/String);
```

###### Example

```javascript
const table  = base.getTableByName('Table1');
const columns = base.getColumns(table);

column.forEach((column) => {
	output.text(column.name);
})

```

```javascript
const columns = base.getColumns('Table1');
```

#### getShownColumns

Get all the displayed columns in a view, excluding the hidden columns in the view, and return an array

```javascript
const columns = base.getShownColumns(table: Object/String, view: Object/String);
```

##### Example

```javascript
const table  = base.getTableByName('Table1');
const view = base.getViewByName(table, 'view 1');
const columns = base.getShownColumns(table, view);
column.forEach((column) => {
	output.text(column.name);
})
```

```javascript
const columns = base.getShownColumns('Table1', 'view 1');
```

#### getColumnByName

Get the column object via its name

```javascript
const column = base.getColumnByName(table: Object/String, name: String);
```

##### Example

```javascript
const column = base.getColumnByName(table, 'Column name');
output.text(column.name);
```

```javascript
const column = base.getColumnByName('Table1', 'Column name');
```

#### getColumnsByType

Get all specific types of columns in the table

```javascript
const columns = base.getColumnsByType(table: Object/String, type: String);
```

##### Example

```javascript
const table  = base.getTableByName('Table1');
const columns = base.getColumnsByType(table, 'text');
output.text(column.length);
```

```javascript
const columns = base.getColumnsByType('Table1', 'text');
output.text(column.length);
```

## Row

#### getRows

Get all the rows of the view and return an array

```javascript
const rows = base.getRows(table: Object/String, view: Object/String);
```

##### Example

```javascript

const table = base.getTableByName('Table1');
const view = base.getViewByName(table, 'view1');
const rows = base.getRows(table, view);
```

```javascript
const rows = base.getRows('Table1', 'view1');
```

#### getGroupedRows

Get rows in the grouped view

```javascript
base.getGroupedRows(table: Object/String, view: Object/String);
```

##### Example

```javascript
const table = base.getTableByName('Table1');
const view = base.getViewByName(table, 'GroupedView');
const groupViewRows = base.getGroupedRows(table, view);
```

```javascript
const groupViewRows = base.getGroupedRows('Table1', 'GroupedView');
```

#### getRowById

Get a row via its id and return a row object

```javascript
const row = base.getRowById(table: Object/String, rowId: String);
```

##### Example

```javascript
const table = base.getTableByName('Table1');
const row = base.getRowById(table, "M_lSEOYYTeuKTaHCEOL7nw");
```

```javascript
const row = base.getRowById('Table1', "M_lSEOYYTeuKTaHCEOL7nw");
```

#### deleteRowById

Delete a row in a table by its ID.

```javascript
base.deleteRowById(table: Object/String, rowId: String);
```

##### Example

```javascript
const table = base.getTableByName('Table1');
base.deleteRowById(table, 'M_lSEOYYTeuKTaHCEOL7nw');
```

```javascript
base.deleteRowById('Table1', 'M_lSEOYYTeuKTaHCEOL7nw');
```

#### addRow

Add a row to a table

```javascript
base.addRow(table: Object/String, rowData: Object, viewName?: String)
```

##### Example
```javascript
const table = base.getTableByName('Table1');
base.addRow(table, {'Name': 'Alex', 'Age': '18'});
base.addRow(table, {'Name': 'Alex', 'Age': '18'}, 'Default View');
```

```javascript
base.addRow('Table1', {'Name': 'Alex', 'Age': '18'});
base.addRow('Table1', {'Name': 'Alex', 'Age': '18'}, 'Default View');
```

#### modifyRow

Modify a row in the table

```javascript
base.modifyRow(table: Object/String, row: Object, updateRowData: Object);
```

##### Example

```javascript
const table = base.getTableByName('Table1');
const row = base.getRowById(table, "M_lSEOYYTeuKTaHCEOL7nw");
base.modifyRow(table, row, {'Name': 'new name', 'number': 100});
```

```javascript
const row = base.getRowById('Table1', "M_lSEOYYTeuKTaHCEOL7nw");
base.modifyRow('Table1', row, {'Name': 'new name', 'number': 100});
```

#### modifyRows

Modify multiple rows in the table at once

```javascript
base.modifyRow(table: Object/String, rows: Array, updatedRows: Array);
```

##### Example

```javascript
const table = base.getTableByName('Table1');
const rows = base.getRows('Table1', 'Default view');
const selectedColumnName = 'Name';
const selectedRows = [], updatedRows = [];

rows.forEach((row) => {
  if (row[columnName] === 'name') {
    selectedRows.push(row);
    updatedRows.push({columnName: 'name1'});
  }
});
base.modifyRow(table, selectedRows, updatedRows);
```

### filter

Pass a conditional statement, filter out the rows that meet the conditions in the table, and return a querySet object

* [查询语句规范](query-sentences.md)

* [QuerySet](queryset.md)

#### Example

```javascript
// Filter out rows whose number column is equal to 5, and return a querySet object
const querySet = base.filter('Table1', 'Default', 'number = 5');
```

## Links

#### addLink

Add link, link other table records

```javascript
base.addLink(linkId, tableName, linkedTableName, rowId, linkedRowId)
```

* linkId:  link_id in the data attribute of the link column
* tableName: the name of the link table
* linkedTableName: the name of the linked table
* rowId: id of link row
* linkedRowId: id of the linked row 

##### Example

```javascript
base.addLink('5WeC', 'real-img-files', 'contact', 'CGtoJB1oQM60RiKT-c5J-g', 'PALm2wPKTCy-jdJNv_UWaQ')
```

#### removeLink

Delete the link row

```javascript
base.removeLink(linkId, tableName, linkedTableName, rowId, linkedRowId)
```

##### Example

```javascript
base.removeLink('5WeC', 'real-img-files', 'contact', 'CGtoJB1oQM60RiKT-c5J-g', 'PALm2wPKTCy-jdJNv_UWaQ')
```

#### getColumnLinkId

Get the link id by column name

```javascript
base.getColumnLinkId(tableName, columnName)
```

##### Example

```javascript
base.getColumnLinkId('Table1', 'Record')
```

#### updateLinks

Remove all existing row links and add new links

```javascript
base.updateLinks(linkId, tableName, linkedTableName, rowId, updatedlinkedRowIds)
```

##### Example

```javascript
const rows = base.getRows('contact', 'Default_view');

// Update row links to [rows[0]._id, rows[1]._id, rows[2]._id, rows[3]._id]
base.updateLinks('5WeC', 'real-img-files', 'contact', 'CGtoJB1oQM60RiKT-c5J-g', [rows[0]._id, rows[1]._id, rows[2]._id, rows[3]._id])
```