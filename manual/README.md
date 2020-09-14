# Introduction

SeaTable scirpts are written in Javascript language. They are designed for you to manipulate data in a base easily. A script can be run in users' browser or in background inside a Docker container. (Currently running in browser is supported yet)

## Quick start

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


## Reference

Understanding the data structure of base object will help to manipulate base:

* [Data structure](data-structure.md)

Programming reference:

* [base](base.md)
* [output](output.md)
* [utilities](utils.md)

## Examples

You can find some easy to understand examples here: [https://github.com/seatable/seatable-scripts/tree/master/examples](https://github.com/seatable/seatable-scripts/tree/master/examples)