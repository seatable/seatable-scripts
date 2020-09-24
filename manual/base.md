# Base object

Base object provide a way to manipulate data in a base.

## Table

#### getActiveTable

Get the currently selected table.

##### Example

```javascript
const table = base.getActiveTable();
output.markdown(`#### ${table.name}`);
```

#### getTables

Get all tables.

##### Example

```javascript
const tables = base.getTables();
output.text(tables.length);
```

#### getTableByName

Get a table via its name.

##### Example

```javascript
const table = base.getTableByName('A test table');
output.text(table._id);
```

#### addTable

Add a table.

##### Example

```javascript
base.addTable('New table');
```

#### renameTable

Rename a table.

##### Example

```javascript
base.renameTable('Old name', 'New name');
```

#### deleteTable

Delete a table.

##### Example

```javascript
base.deleteTable('Old table');
```

## View

#### getActiveView

Get the current selected view.

##### Example

```javascript
const view  = base.getActiveView();
output.text(view.name);
```

#### getViews

Get all views of a table.

```javascript
const view = base.getViews(table: Object/String, viewName: String);
```

##### Example

```javascript
const table = base.getTableByName('Table1');
const views = base.getViews(table);
output.text(views.length);
```

```javascript
const views = base.getViews('Table1');
```

#### getViewByName

Get a view by table object and view name.

```javascript
const view = base.getViewByName(table: Object/String, viewName: String);
```

##### Example

```javascript
const table = base.getTableByName('Table1'); 
const view = base.getViewByName(table, 'View Name');
output.text(view.name);
```

```javascript
const view = base.getViewByName('Table1', 'View Name');
output.text(view.name);
```

#### addView

Add a view to a table

```javascript
base.addView(table: Object/String, viewName: String);
```

##### Example

```javascript
const table = base.getTableByName('Table1'); 
base.addView(table, 'view1');
```

```javascript
base.addView('Table1', 'view1');
```

#### renameView

Rename a view

```javascript
base.renameView(table: Object/String, currentViewName: String, newViewName: String);
```

##### Example

```javascript
const table = base.getTableByName('Table1'); 
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
base.deleteView('Table1', 'view2');
```

## Column

#### getColumns

Get columns of a table.

```javascript
base.getColumns(table: Object/String);
```


###### Example

```javascript
const table = base.getTableByName('Table1');
const columns = base.getColumns(table);

column.forEach((column) => {
	output.text(column.name);
})
```

```javascript
const columns = base.getColumns('Table1');
```

#### getShownColumns

Get all visible columns in a view

```javascript
const columns = base.getShownColumns(table: Object/String, view: Object/String);
```

##### Example

```javascript
const columns = base.getShownColumns(table, view);
column.forEach((column) => {
	output.text(column.name);
});
```

```javascript
const columns = base.getShownColumns('Table1', 'view1');
```

#### getColumnByName

Get column object by name.

```javascript
const column = base.getColumnByName(table: Object/String, name: String);
```

##### Example

```javascript
const table = base.getTableByName('Table1');
const column = base.getColumnByName(table, "A test column");
output.text(column.name);
```

```javascript
const column = base.getColumnByName('Table1', "A test column");
output.text(column.name);
```

#### getColumnsByType

Get columns of a specific type.

```javascript
const columns = base.getColumnsByType(table: Object/String, type: String);
```

##### Example

```javascript
const table = base.getTableByName('Table1');
const columns = base.getColumnsByType(table, "text");
output.text(column.length);
```

```javascript
const columns = base.getColumnsByType('Table1', "text");
output.text(column.length);
```

## Row

#### getRows

Get rows of a specific view.

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

Get grouped rows of a specific view. The view should be a view containing group of rows.

```javascript
base.getGroupedRows(table: Object/String, view: Object/String);
```

##### Example

```javascript
const table = base.getTableByName('table');
const view = base.getViewByName(table, 'grouped view');
const groupViewRows = base.getGroupedRows(table, view);
```

```javascript
const groupViewRows = base.getGroupedRows('Table1', 'grouped view');
```

##### getRowById

Get a row by its ID.

```javascript
const row = base.getRowById(table: Object/String, rowId: String);
```

##### Example

```javascript
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
base.deleteRowById(table, "M_lSEOYYTeuKTaHCEOL7nw");
```

```javascript
base.deleteRowById('Table1', "M_lSEOYYTeuKTaHCEOL7nw");
```

#### addRow

Add a row to a table. The new row will append at the end of the table. If view is given, append the row at the end of that view.

```javascript
base.addRow(table: Object/String, rowData: Object, viewName?: String)
```

##### Example

```javascript
const table = base.getTableByName('table');
// use case
base.addRow(table, {'Name': 'Joe Key', 'Age': '18'});

// use case
base.addRow(table, {'Name': 'Joe Key', 'Age': '18'}, 'Default View');
```

```javascript
// use case
base.addRow('Table1', {'Name': 'Joe Key', 'Age': '18'});

// use case
base.addRow('Table1', {'Name': 'Joe Key', 'Age': '18'}, 'Default View');
```

#### modifyRow

Modify a row in a table.

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
