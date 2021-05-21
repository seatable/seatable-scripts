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
batch_update_links(self, links)
```

##### Example

```python
links = [
        {
            "row_id":'NK6ImdjPTMy0baWIg5sfmA',
            "link_id":'r4IJ',
            "table_id":'0000',
            "other_table_id":'kFoO',
            "other_rows_ids":['exkb56fAT66j8R0w6wD9Qg',
                              'DjHjwmlRRB6WgU9uPnrWeA']
        },
        {
            "row_id": 'chyxfYc-S8SHQmaJ2i20Vg',
            "link_id": 'r4IJ',
            "table_id": '0000',
            "other_table_id": 'kFoO',
            "other_rows_ids": ['Ufrm3ZLmSiiqJcKvlPdsGw',
                               'DjHjwmlRRB6WgU9uPnrWeA']
        },...
]

base.batch_update_links(links)
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