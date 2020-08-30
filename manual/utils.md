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