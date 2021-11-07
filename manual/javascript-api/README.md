# JavaScript API 

JavaScript API encapsulates SeaTable Server Restful API. You can call it in your front-end page or Node.js program.

> Note: JavaScript API cannot be used for scripts in SeaTable bases. For script programming, please refer to another document.

## Reference

Data structure of object in SeaTable:

* [Data structure](../data-structure.md)

SeaTable APIs:

* [Base](base.md)
* [Query](query.md)
* [Rows](rows.md)
* [Links](links.md)
* [Columns](columns.md)
* [Constants](constants.md): Some constant definitions

To use SeaTable APIS, you should first initialize a base object and call `base.auth()`. `base.auth()` is an async function, which needs to be executed in async functions. Other APIs all return a promise object. There are two ways to use them

The first way:

```
base.listViews(tableName).then(views => {
  // Use views to complete the requirements
}).catch(error => {
  // Exception handling
})
```

The second way:

```
try {
  const views = await base.listViews(tableName);
  // Use views to complete the requirements
} catch (error) {
  // Exception handling
}
```

SeaTable API Errors

* 400 Params invalid
* 403 Permission denied
* 413 exceed limit
* 500 Internal Server Error
