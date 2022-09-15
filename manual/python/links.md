# Links

#### Get linked records

List the linked records of rows. You can get the linked records of multiple rows.

```python
base.get_linked_records(table_id, link_column_key, rows)
```

* table_id: the id of link table
* link_column_key: the column key of the link column of link table ( not link_id )
* rows:  a list,  each item of the which contains a row info including row_id, offset (defualt by 0) and limit (default by 10) of link table

##### Example

```python
base.get_linked_records('0000', '89o4', rows=[
        {'row_id': 'FzNqJxVUT8KrRjewBkPp8Q', 'limit': 2, 'offset': 0},
        {'row_id': 'Jmnrkn6TQdyRg1KmOM4zZg', 'limit': 20}
    ])

# a key-value data structure returned as below
# key: row_id of link table
# value: a list which includes the row info of linked table
{
    'FzNqJxVUT8KrRjewBkPp8Q': [
        {'row_id': 'LocPgVvsRm6bmnzjFDP9bA', 'display_value': '1'},                            
        {'row_id': 'OA6x7CYoRuyc2pT52Znfmw', 'display_value': '3'},
    ...
    ],
    'Jmnrkn6TQdyRg1KmOM4zZg': [
        {'row_id': 'LocPgVvsRm6bmnzjFDP9bA', 'display_value': '1'},     
        {'row_id': 'OA6x7CYoRuyc2pT52Znfmw', 'display_value': '3'},
         ...
    ]
}
```

#### Add link

Add links, link other table records

```python
base.add_link(link_id, table_name, other_table_name, row_id, other_row_id)
```

* link_id:  link_id in the data attribute of the link column
* table_name: the name of the link table
* other_table_name: the name of the linked table
* row_id: id of link row
* other_row_id: id of the linked row 

##### Example

```python
base.add_link('5WeC', 'real-img-files', 'contact', 'CGtoJB1oQM60RiKT-c5J-g', 'PALm2wPKTCy-jdJNv_UWaQ')
```

#### Update link

Modify the info of link-type column

```
update_link(self, link_id, table_id, other_table_id, row_id, other_rows_ids)
```

* link_id:  link_id in the data attribute of the link column
* table_id: the id of the link table
* other_table_id:  the id of the linked table
* row_id:   id of link row
* other_rows_ids: ids of the linked row 

##### Example

```python
base.update_link(
        link_id='r4IJ',
        table_id='0000',
        other_table_id='kFoO',
        row_id='BXhEm9ucTNu3FjupIk7Xug',
        other_rows_ids=[
          'exkb56fAT66j8R0w6wD9Qg',
          'DjHjwmlRRB6WgU9uPnrWeA'
        ]
    )
```

#### Batch update links

Batch update infos of link-type columns

```
base.batch_update_links(link_id, table_id, other_table_id, row_id_list, other_rows_ids_map)
```

##### Example

```python
link_id = "WaW5"
table_id = "0000"
other_table_id ="jtsf"
row_id_list = ["fRLglslWQYSGmkU7o6KyHw","eSQe9OpPQxih8A9zPXdMVA","FseN8ygVTzq1CHDqI4NjjQ"]
other_rows_ids_map = {
    	"FseN8ygVTzq1CHDqI4NjjQ":["OcCE8aX8T7a4dvJr-qNh3g","JckTyhN0TeS8yvH8D3EN7g"],
    	"eSQe9OpPQxih8A9zPXdMVA":["cWHbzQiTR8uHHzH_gVSKIg","X56gE7BrRF-i61YlE4oTcw"],
    	"fRLglslWQYSGmkU7o6KyHw":["MdfUQiWcTL--uMlrGtqqgw","E7Sh3FboSPmfBlDsrj_Fhg","UcZ7w9wDT-uVq4Ohtwgy9w"]
}

base.batch_update_links(link_id, table_id, other_table_id, row_id_list, other_rows_ids_map)
```

#### Remove link

Delete the link row

```python
base.remove_link(link_id, table_name, other_table_name, row_id, other_row_id)
```

##### Example

```python
base.remove_link('5WeC', 'real-img-files', 'contact', 'CGtoJB1oQM60RiKT-c5J-g', 'PALm2wPKTCy-jdJNv_UWaQ')
```

#### Get link id

Get the link id by column name

```python
base.get_column_link_id(table_name, column_name, view_name=None)
```

##### Example

```python
base.get_column_link_id('Table1', 'Record') # return the link id such as 'aHL2'
```