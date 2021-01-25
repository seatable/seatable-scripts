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