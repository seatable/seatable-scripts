# Row

This document will show how to operate row through Base object

If you do not yet understand the Base object, please refer to this document

* [Base](base.md)

#### list rows

Get all rows of the table

```python
base.list_rows(table_name, view_name=None)
```

##### Example

```python
rows = base.list_rows('Table1')
rows = base.list_rows('Table1', view_name='default')
```

#### append row

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

#### insert row

Insert a row

```python
base.insert_row(table_name, row_data, anchor_row_id)
# anchor_row_id is the id of the anchored row, the new row will be inserted below this row
```

##### Example

```python
row_data = {
    "Name": "I am new Row"
}

base.insert_row('Table1', row_data, 'U_eTV7mDSmSd-K2P535Wzw')
```

#### batch append rows

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

#### update row

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

#### delete row

Delete a row

```python
base.delete_row(table_name, row_id)
```

##### Example

```python
base.delete_row('Table1', 'U_eTV7mDSmSd-K2P535Wzw')
```

#### filter rows

Filter rows

```python
base.filter_rows(table_name, filters, view_name=None, filter_conjunction='And')
```

##### Example

```python
filters = [{
    "column_key":"0000",
    "filter_predicate":"contains",
    "filter_term":"a"
}],
base.filter_rows('Table1', filters=filters)
```
