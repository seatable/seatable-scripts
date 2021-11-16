# Tables

## addTable

Add table

```javascript
dtable.addTable(tableName);
```

Arguments

* tableName: the name of the table

Example

```javascript
dtable.addTable('newTable');
```

## deleteTable

Delete table

```javascript
dtable.deleteTable(tableName);
```

Arguments

* tableName: the name of the table

Example

```javascript
dtable.deleteTable('newTable');
```

## renameTable

Modify the name of the table

```javascript
dtable.renameTable(oldTableName, newTableName);
```

Arguments

* oldTableName: the old name of the table
* newTableName: the new name of the table

Example

```javascript
dtable.renameTable('oldTableName', 'newTableName');
```

## getTables

Get all the tables in base

```javascript
dtable.getTables();
```

Example

```javascript
const tables = dtable.getTables();
```

## getActiveTable

Get the current table being accessed by base

```javascript
dtable.getActiveTable();
```

Example

```javascript
const table = dtable.getActiveTable();
```

## getTableByName

Get the table by table name

```javascript
dtable.getTableByName(tableName);
```

Arguments

* tableName: the name of the table

Example

```javascript
dtable.getTableByName('tableName');
```

## getTableById

Get the content of the table by id

```javascript
dtable.getTableById(tableId);
```

Arguments

* tableId: Id of the table

Example

```javascript
dtable.getTableById('0000');
```

## importDataIntoNewTable

Add a new table to base and include default data

```javascript
dtable.importDataIntoNewTable(tableName, columns, rows);
```

Arguments

- tableName: name of the new table
- columns: columns of the new table
- rows: rows of the new table

Example

```javascript
const tableName = 'tableName';
const columns = [
  {
    key: '0000',
    type: 'text',
    name: 'column1',
    width: 200,
  },
  {
    key: '1111',
    type: 'date',
    name: 'column2',
    width: 300,
    data: {
      format: 'YYYY-MM-DD'
    }
  }
];
const rows = [
  {'0000': 'Mike', '1111': '1993-03-03'},
  {'0000': 'Tom', '1111': '1993-04-04'},
  {'0000': 'Makino', '1111': '1994-04-05'},
];
dtable.importDataIntoNewTable(tableName, columns, rows);
```

