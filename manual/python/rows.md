# Row

#### List rows

Get all rows of the table

```python
base.list_rows(table_name, view_name=None, order_by=None, desc=False, start=None, limit=None)
```

* table_name: the name or id of the table
* view_name: the name or ID of a view in a table. Only rows satisfy the filter conditions of the view will be returned, optional, string
* start: starting position of the returned rows, optional, number, default by 0
* limit: the number limit of the returned rows, optional, number, the limit is set to max 1000 even if a number >1000 is assigned.

Additional parameters when view_name is not given:

- order_by: a column's name , use this column to sort the rows
- desc:  optional, boolean

##### Example

```python
rows = base.list_rows('Table1')
rows = base.list_rows('Table1', view_name='default', order_by='Age', desc=True, start=5, limit=20)
```

#### Get row

Get a row of the table by row ID.

```python
base.get_row(table_name, row_id)
```

* table_name: the name or id of the table

##### Example

```python
row = base.get_row('Table1', 'U_eTV7mDSmSd-K2P535Wzw')
```

#### Append row

Append a row

```python
base.append_row(table_name, row_data)
```

* table_name: the name or id of the table

##### Example

```python
row_data = {
    "Name": "I am new Row"
}

base.append_row('Table1', row_data)
```

#### Insert row

Insert a row

```python
base.insert_row(table_name, row_data, anchor_row_id)
```

* table_name: the name or id of the table
* anchor_row_id: the row under which the new row will be inserted

##### Example

```python
row_data = {
    "Name": "I am new Row"
}

base.insert_row('Table1', row_data, 'U_eTV7mDSmSd-K2P535Wzw')
```

#### Batch append rows

Batch append rows

```python
base.batch_append_rows(table_name, rows_data)
```

* table_name: the name or id of the table

##### Example

```python
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
base.batch_append_rows('Table6', rows_data)
```

#### Update row

Update a row

```python
base.update_row(table_name, row_id, row_data)
```

* table_name: the name or id of the table

##### Example

```python
row_data = {
    "dcXS": "123"
}
base.update_row('Table1', 'U_eTV7mDSmSd-K2P535Wzw', row_data)
```

#### Batch update rows

Batch update rows

```
batch_update_rows(table_name, rows_data)
```

* table_name: the name or id of the table

##### Example

```python
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
base.batch_update_rows('Table1', rows_data=updates_data)
```

#### Delete row

Delete a row

```python
base.delete_row(table_name, row_id)
```

* table_name: the name or id of the table

##### Example

```python
base.delete_row('Table1', 'U_eTV7mDSmSd-K2P535Wzw')
```

#### Batch delete rows

Batch delete rows

```python
base.batch_delete_rows(table_name, row_ids)
```

* table_name: the name or id of the table

##### Example

```python
del_rows = rows[:3]
row_ids = [row['_id'] for row in del_rows]
base.batch_delete_rows('Table1', row_ids)
```

