# Views

## addView

add a view

```javascript
dtable.addView(tableName, viewName);
```

Arguments

* tableName: name of table
* viewName: Add the name of the view

Example

```javascript
dtable.addView('tableName', 'viewName');
```

## deleteView

delete a view

```javascript
dtable.deleteView(tableName, viewName);
```

Arguments

* tableName: name of table
* viewName: Delete the name of the view

Example

```javascript
dtable.deleteView('TableName', ViewName);
```

## renameView

modify view name

```javascript
dtable.renameView(tableName, oldViewName, newViewName);
```

Arguments

* tableName: name of table
* oldViewName: The old name of the view
* newViewName: The new name of the view

Example

```javascript
dtable.renameView('tableName', 'oldViewName', 'newViewName');
```

## getViews

Get all the views in the table

```javascript
dtable.getViews(table);
```

Arguments

* table: table object

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const views = dtable.getViews(table);
```

## getNonArchiveViews

Get all non-archive views in the table

```javascript
dtable.getNonArchiveViews(table);
```

Arguments

* table: table object

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const views = dtable.getNonArchiveViews(table);
```

## getActiveView

Get the view currently being accessed by base

```javascript
dtable.getActiveView();
```

Example

```javascript
const view = dtable.getActiveView();
```

## getViewByName

Get view content by name

```javascript
dtable.getViewByName(table, viewName);
```

Arguments

* table: table object
* viewName: Get the name of the view

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const viewName = 'viewName';
const view = dtable.getViewByName(table, viewName);
```

## getViewById

Get view content by id

```javascript
dtable.getViewById(table, viewId);
```

Arguments

* table: table object
* viewId: Get the id of the view

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const viewId = '0000';
const view = dtable.getViewById(table, viewId);
```

## isDefaultView

Determine whether it is the default view (does not include grouping, filtering, sorting, etc.)

```javascript
dtable.isDefaultView(view, columns);
```

Arguments

* view: view object
* columns: all column contents in the table

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const viewId = '0000';
const view = dtable.getViewById(table, viewId);
const columns = dtable.getColumns(table);
const isDefaultView = dtable.isDefaultView(view, columns);
```

## isGroupView

Determine whether it is a view containing grouping (including grouping conditions)

```javascript
dtable.isGroupView(view, columns);
```

Arguments

* view: view object
* columns: all column contents in the table

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const viewId = '0000';
const view = dtable.getViewById(table, viewId);
const columns = dtable.getColumns(table);
const isGroupView = dtable.isGroupView(view, columns);
```

## isFilterView

Determine whether it is a filter view (including filter conditions)

```javascript
dtable.isFilterView(view, columns);
```

Arguments

* view: view object
* columns: all column contents in the table

Example

```javascript
const tableId = '0000';
const table = dtable.getTableById(tableId);
const viewId = '0000';
const view = dtable.getViewById(table, viewId);
const columns = dtable.getColumns(table);
const isFilterView = dtable.isFilterView(view, columns);
```
