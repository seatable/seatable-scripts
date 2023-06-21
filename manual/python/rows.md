# Rows

The `seatable-api` module supports multiple functions to work with rows in a SeaTable base.

The following parameter names are used in the function descriptions on this page:

* table_name: the name or id of a table
* row_id: the id of a row
* row_data: a dictionary
* rows_data: a list of dictionaries

##### Example

```python
row_data = {
    "Name": "Ron"
}

rows_data = [{
                'Name': 'Ron',
                'Birthday': '1975-01-01'
            }, {
                'Name': 'Richard',
                'Birthday': '1978-10-08'
            }, {
                'Name': 'Regina',
                'Birthday': '1976-05-30'
            }]
```

#### Get rows

Get rows of a table

```python
base.list_rows(table_name, view_name=None, order_by=None, desc=False, start=None, limit=None)
```

* table_name: name or id of the table
* view_name: name of the view
* order_by:  name of the column by which the data is ordered
* desc: sort order; the possible values are True and False
* start: start position of rows
* limit:  number of rows returned, the maximum value for limit is 1 000. 

##### Example

```python
rows = base.list_rows('Table1')
rows = base.list_rows('Table1', view_name='default', order_by='Age', desc=True, start=5, limit=20)
```

The [query with SQL](./sql.md) allows to retrieve more rows and offers more filter options.

#### Get row

Get a row of a table by its row ID.

```python
base.get_row(table_name, row_id)
```

##### Example

```python
row = base.get_row('Table1', 'U_eTV7mDSmSd-K2P535Wzw')
```

#### Append row

Append a row to a table

```python
base.append_row(table_name, row_data)
```

##### Example

```python
row_data = {
    "Name": "Ron"
}

base.append_row('Table1', row_data)
```

#### Insert row

Insert a row to a table

```python
base.insert_row(table_name, row_data, anchor_row_id)
```

* anchor_row_id: the row under which the new row will be inserted

##### Example

```python
row_data = {
    "Name": "Ron"
}

base.insert_row('Table1', row_data, 'U_eTV7mDSmSd-K2P535Wzw')
```

#### Batch append rows

Append multiple rows to a table

```python
base.batch_append_rows(table_name, rows_data)
```

##### Example

```python
rows_data = [{
                'Name': 'Ron',
                'Birthday': '1975-01-01'
            }, {
                'Name': 'Richard',
                'Birthday': '1978-10-08'
            }, {
                'Name': 'Regina',
                'Birthday': '1976-05-30'
            }]
base.batch_append_rows('Table6', rows_data)
```

#### Update row

Update a row

```python
base.update_row(table_name, row_id, row_data)
```


##### Example

```python
row_data = {
    "dcXS": "123"
}
base.update_row('Table1', 'U_eTV7mDSmSd-K2P535Wzw', row_data)
```

#### Batch update rows

Update multiple rows in a table

```
batch_update_rows(table_name, rows_data)
```

##### Example

```python
updates_data = [
        {
            "row_id": "fMmCFyoxT4GN5Y2Powbl0Q",
            "row": {
                "Name": "Ron",
                "age": "36"
            }
        },
        {
            "row_id": "cF5JTE99Tae-VVx0BGT-3A",
            "row": {
                "Name": "Richard",
                "age": "33"
            }
        },
        {
            "row_id": "WP-8rb5PSUaM-tZRmTOCPA",
            "row": {
                "Name": "Regina",
                "age": "22"
            }
        }
    ]
base.batch_update_rows('Table1', rows_data=updates_data)
```

#### Delete row

Delete a row in a table

```python
base.delete_row(table_name, row_id)
```

##### Example

```python
base.delete_row('Table1', 'U_eTV7mDSmSd-K2P535Wzw')
```

#### Batch delete rows

Delete multiple rows in a table

```python
base.batch_delete_rows(table_name, row_ids)
```


##### Example

```python
del_rows = rows[:3]
row_ids = [row['_id'] for row in del_rows]
base.batch_delete_rows('Table1', row_ids)
```

