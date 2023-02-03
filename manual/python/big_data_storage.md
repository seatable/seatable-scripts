# Big data storage

We provide some functions that can handle the data in the big data storage. Before calling these functions, please first turn on the big data feature on web page.

#### Insert rows into big data storage

Batch insert rows into big data storage

```python
base.big_data_insert_rows(table_name, rows_data)
```

* table_name: the name of the table


##### Example

```python
rows = [
        {'Name': "A"},
        {'Name': "B"}
    ]

base.big_data_insert_rows('Table1', rows_data=rows)
```

