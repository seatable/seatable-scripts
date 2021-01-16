# Utility functions

Utility functions help you to work with data in SeaTable.

### formatDate

Format date to 'YYYY-MM-DD' to be used in a date column.

##### Example

```javascript
let date = new Date();
let formatDate = base.utils.formatDate(date);

output.text(formatDate); // 2020-08-20
```

### formatDateWithMinutes

Format date to 'YYYY-MM-DD HH:mm' to be used in a date column.

##### Example

```javascript
let date = new Date();
let formatDate = base.utils.formatDateWithMinutes(date);

output.text(formatDate); // 2020-08-20 14:00
```

### lookupAndCopy

```javascript
base.lookupAndCopy(targetTable, targetColumn, targetColumnToCompare, sourceTableName, sourceColumnName, sourceColumnToCompare = null);
```

Similar to the vlookup function in Excel. Find a matching row in the source table for each row of the target table, and then copy the data of the specified cell of the matching row to the specified cell of the target row.

For example, we have a source table that contains the correspondence between user names and email addresses:

| Name | Email | 
|-----|-------|
| xxx | xxxx |
| yyy | yyyy |

The target table only has the user names

| Name | Email | 
|-----|-------|
| xxx |       |
| yyy |       |

We need to copy the Email information in the source table to the target table, then this function can be used.

##### Example

```javascript
  
  // Match the rows with the same content in the Name column of Table1 and Table2, copy the contents of the Email column of the row in Table1 to the Email column of the corresponding row in Table2
  base.lookupAndCopy('Table2', 'Email', 'Name', 'Table1', 'Name');
  
  // Match the rows with the same content in the Name column in Table1 and the Name1 column in Table2, and copy the contents of the Email column of the row in Table1 to the Email1 column of the corresponding row in Table2
  base.lookupAndCopy('Table2', 'Email1', 'Name1', 'Table1', 'Email', 'Name');
```

### query

Filter and summary the table data by SQL like statements

#### Example

```javascript
 // Filter out the rows where the sum of the three columns 'number', 'number1', and 'number2' is greater than 5 then sum the number and number2 columns in these rows, return {number: 12, number2: 23}
 base.utils.query('Table1', 'select sum(number), sum(number2) where number + number1 + number2 > 5');
  
```

### filter

Pass a conditional statement, filter out the rows that meet the conditions in the table, and return a querySet object

#### Example

```javascript
// Filter out rows whose number column is equal to 5, and return a querySet object
const querySet = base.utils.filter('Table1', 'Default', 'number = 5');
```

#### querySet object

This object provides some methods to manipulate the data filtered by the filter method

##### querySet.all

Returns all filtered data in the form of a list

###### Example

```javascript
const list = querySet.all();
```

##### querySet.count

Returns the number of filtered rows

###### Example

```javascript
const count = querySet.count();
```

##### querySet.last

Return the last filtered data

###### Example

```javascript
const row = querySet.last();
```

##### querySet.first

Return the first filtered data

###### Example

```javascript
const row = querySet.first();
```

##### querySet.delete

Delete all filtered rows and return the number of successfully deleted

###### Example

```javascript
const count = querySet.delete();
```

##### querySet.update

Modify the row data and return the updated data

###### Example

```javascript
// Modify the contents of the Name column of all filtered rows to xxxx
const rows = querySet.update({Name: 'xxxx'});
```

##### querySet.filter

Further filtering, return a querySet object

###### Example

```javascript
// Filter out the rows with the value of Tom in the Name column of the querySe
const querySet1 = querySet.filter('Name = "Tom"');
```

##### querySet.get

Get a piece of data in the querySet that meets the conditions, and return a row

###### Example

```javascript
// Get the first data of Tom in the Name column of the querySet
const row = querySet.get('Name = "Tom"');
```