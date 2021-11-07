# SeaTable programming manual

There are various ways to build extentions for SeaTable, including

* Writing a [JavaScript script](javascript/README.md): The script runs directly in the current browser and is suitable for simple data processing.
* Writing a [Python script](python/README.md): The Python runs on the server side and can be set to automatically run periodically, which is suitable for more complex data processing scenarios. You can also use the same API in your standalone Python program.
* Writing a standalone web page or accessing data in SeaTable in your Node.js program: in both case, you can accessing data in SeaTable using [SeaTable JavaScript API](javascript-api/README.md)


## Quick start

In SeaTable, a base includes multiple tables, and a table contains multiple rows and columns. A row contains multiple fields.

### JavaScript script

There are two pre-defined objects:

1. base, you can use base object to manipulate data in a base.
2. output, you can use output object to output some feedbacks.

Let's look at a simple example, outputing the number of tables in a base. To start with, add a new script, input the following content, then click the `run script` button.

```javascript
const tables = base.getTables();
output.text(tables.length);
```

Let's look at another example, outputing the Name field of every rows in a table:

```javascript
// get table by name
const table = base.getTableByName('First table'); 
// get view by name
const view = base.getViewByName(table, 'Default View');
// get rows via table and view
const rows = base.getRows(table, view);
// iterate and print
for (var i=0; i<rows.length; i++) {
  const row = rows[i];
  output.text(row['Name']);
}
```

From the two examples, we can see that via calling the corresponding methods of base object, we can read and write data in a base easily.

### Python script

When writing the script, you need to import Base objects from seatable_api and init it, and then you can call functions to operate the table. The following is a simple example, to add a row to a table:

```
from seatable_api import Base

server_url = os.environ.get('dtable_web_url')
api_token = os.environ.get('api_token')
base = Base(api_token, server_url)
base.auth()

row_data = {
    "Name": "I am new Row"
}
base.append_row('Table1', row_data)
```

## Reference

* [Data structure](data-structure.md)
* [JavaScript script](javascript/README.md)
* [Python script and API](python/README.md)
* [Javascript API](javascript-api/README.md)
