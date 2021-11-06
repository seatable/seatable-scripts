# Row

#### List rows

Get all rows of the table

```javascript
base.listRows(table_name, view_name=None, order_by='', desc='', start='', limit='')
```

其中

* order_by:  column name based on which ordering the data
* start: start position of rows
* limit:  number of rows returned

##### Example

```javascript
const rows1 = await base.listRows('Table1')
const rows2 = await base.listRows('Table1', view_name='default', order_by='年龄', desc=true, start=5, limit=20)
```

#### Get row

Get a row of the table by row ID.

```javascript
base.getRow(table_name, row_id)
```

##### Example

```javascript
const row = await base.getRow('Table1', 'U_eTV7mDSmSd-K2P535Wzw')
```

#### Append row

Append a row

```javascript
base.appendRow(table_name, row_data)
```

##### Example

```javascript
row_data = {
    "Name": "I am new Row"
}

await base.appendRow('Table1', row_data)
```

#### Insert row

Insert a row

```javascript
base.insertRow(table_name, row_data, anchor_row_id)
```

* anchor_row_id: the row under which the new row will be inserted

##### Example

```javascript
row_data = {
    "Name": "I am new Row"
}

await base.insertRow('Table1', row_data, 'U_eTV7mDSmSd-K2P535Wzw')
```

#### Batch append rows

Batch append rows

```javascript
base.batchAppendRows(table_name, rows_data)
```

##### Example

```javascript
rows_data = [{
                'Name': 'test batch',
                'content': 'Yes'
            }, {
                'Name': 'test batch',
                'content': 'Yes'
            }, {
                'Name': 'test batch',
                'content': 'Yes'
            }]
await base.batchAppendRows('Table6', rows_data)
```

#### Update row

Update a row

```javascript
base.updateRow(table_name, row_id, row_data)
```

##### Example

```javascript
row_data = {
    "dcXS": "123"
}
await base.updateRow('Table1', 'U_eTV7mDSmSd-K2P535Wzw', row_data)
```

#### Batch update rows

Batch update rows

```javascript
base.batchUpdateRows(table_name, rows_data)
```

##### Example

```javascript
updates_data = [
        {
            "row_id": "fMmCFyoxT4GN5Y2Powbl0Q",
            "row": {
                "Name": "Ranjiwei",
                "age": "36"
            }
        },
        {
            "row_id": "cF5JTE99Tae-VVx0BGT-3A",
            "row": {
                "Name": "Huitailang",
                "age": "33"
            }
        },
        {
            "row_id": "WP-8rb5PSUaM-tZRmTOCPA",
            "row": {
                "Name": "Yufeng",
                "age": "22"
            }
        }
    ]
await base.batchUpdateRows('Table1', rows_data=updates_data)
```

#### Delete row

Delete a row

```javascript
base.deleteRow(table_name, row_id)
```

##### Example

```javascript
await base.deleteRow('Table1', 'U_eTV7mDSmSd-K2P535Wzw')
```

#### Batch delete rows

Batch delete rows

```javascript
base.batchDeleteRows(table_name, row_ids)
```

##### Example

```javascript
const del_rows = rows.slice(0, 3);
const row_ids = del_rows.map(row => row._id);
await base.batchDeleteRows('Table1', row_ids)
```
