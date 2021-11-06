# JavaScript API 

JavaScript API is a package of SeaTable Server Restful API. You can call it in your front-end page or Node.js program.

> Note: JavaScript API cannot be used for scripts in SeaTable tables. For script programming, please refer to another document.

## Reference

Data structure of object in SeaTable:

* [Data structure](../data-structure.md)

SeaTable API introduction:

* [Base](base.md)
* [Query](query.md)
* [Rows](rows.md)
* [Links](links.md)
* [Columns](columns.md)
* [Constants](constants.md): Some constant definitions

SeaTable API instructions

1. Authorization api(base.auth()) is an async function, which needs to be executed in the async function
2. Other apis all return a promise object. There are two ways to use it
```
The first:
base.listViews(tableName).then(views => {
  // Use views to complete the requirements
}).catch(error => {
  // Exception handling
})

The second:

try {
  const views = await base.listViews(tableName);
  // Use views to complete the requirements
} catch (error) {
  // Exception handling
}
```

Seatable API Errors

* 400 Params invalid
* 403 Permission denied
* 413 exceed limit
* 500 Internal Server Error
