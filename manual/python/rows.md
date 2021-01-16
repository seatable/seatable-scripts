# Row

#### List rows

Get all rows of the table

```python
base.list_rows(table_name, view_name=None)
```

##### Example

```python
rows = base.list_rows('Table1')
rows = base.list_rows('Table1', view_name='default')
```

#### Append row

Append a row

```python
base.append_row(table_name, row_data)
```

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

##### Example

```python
row_data = {
    "dcXS": "123"
}
base.update_row('Table1', 'U_eTV7mDSmSd-K2P535Wzw', row_data)
```

#### Delete row

Delete a row

```python
base.delete_row(table_name, row_id)
```

##### Example

```python
base.delete_row('Table1', 'U_eTV7mDSmSd-K2P535Wzw')
```

