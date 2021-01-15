# QuerySet

This document will show how to operate row through QuerySet object. Regards to the format of query statements, please refer to the link bellow for more details. 

* [Query Statements](query-sentences.md)

#### get a queryset

Get a QuerySet and perform the query

```python
base.filter(table_name, conditions="", view_name=None)
```

##### Example

```python
queryset = base.filter("Table1", "")
queryset = base.filter("Table1", "age>18")
queryset = base.filter("Table1", "age>18", view_name="default")
```

#### filter

Perform the query on a QuerySet

```python
queryset.filter(conditions)
```

##### Example

```python
new_queryset = queryset.filter("gender='female' and 'work place'='New York' and age<=65")
new_queryset = queryset.filter("gender='female' or 'work place'='New York'")
new_queryset = queryset.filter("gender='female' and 'work place'!='New York'")
```

#### get a single row

Perform the query and get a single row

```python
queryset.get(conditions)
```

##### Example

```python
row = queryset.get("name=Angela")
```

#### copy queryset

Copy QuerySet

```python
queryset.all()
```

##### Example

```python
new_queryset = queryset.all()
```

#### update rows

Update rows

```python
queryset.update(row_data)
```

##### Example

```python
row_data = {'work place': 'London'}
new_rows = queryset.update(row_data)
```

#### delete rows

Delete rows

```python
queryset.delete()
```

##### Example

```python
count = queryset.delete()
```

#### get a row

Get a row

```python
for row in queryset:
    print(row)

queryset.first()

queryset.last()

queryset[index]
```

##### Example

```python
for row in queryset:
    print(row)

row = queryset.first()

row = queryset.last()

row = queryset[1]
```

#### attributes

Attributes

```python
queryset.count()

len(queryset)

queryset.exists()

if queryset:
    print('True')
```

##### Example

```python
count = queryset.count()

count = len(queryset)

exists = queryset.exists()

if queryset:
    print('True')
```
