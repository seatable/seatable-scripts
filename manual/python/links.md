# Links


#### Add link

Add links, link other table records

```python
# link_id: link_id in the data attribute of the link column
# table_name: The name of the link table
# other_table_name: The name of the linked table
# row_id: id of the link row
# other_row_id: id of the linked row
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