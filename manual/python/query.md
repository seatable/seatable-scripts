# Query with SQL

## Query

Use sql to query a base

```python
base.query(sql)
```

* sql: sql statement

**Note: Only 100 results will be returned by default. To get more results, add `limit` in SQL statement.**

Possible exceptions

* ValueError: sql can not be empty
* ConnectionError: network error
* Exception: no such table
* Exception: no such column
* Exception: columns in group by should match columns in select


## Example

### Basic

```python
base.query('select name, price, year from Bill')
```

Result

```python
[
    {'_id': 'PzBiZklNTGiGJS-4c0_VLw', 'name': 'Bob', 'price': 300, 'year': 2019},
    {'_id': 'Ep7odyv1QC2vDQR2raMvSA', 'name': 'Bob', 'price': 300, 'year': 2021},
    {'_id': 'f1x3X_8uTtSDUe9D60VlYQ', 'name': 'Tom', 'price': 100, 'year': 2019},
    {'_id': 'NxeaB5pDRFKOItUs_Ugxug', 'name': 'Tom', 'price': 100, 'year': 2020},
    {'_id': 'W0BrjGQpSES9nfSytvXgMA', 'name': 'Tom', 'price': 200, 'year': 2021},
    {'_id': 'EvwCWtX3RmKYKHQO9w2kLg', 'name': 'Jane', 'price': 200, 'year': 2020},
    {'_id': 'BTiIGSTgR06UhPLhejFctA', 'name': 'Jane', 'price': 200, 'year': 2021}
]
```


### WHERE

```python
base.query('select name, price from Bill where year = 2021')
```

Result

```python
[
    {'_id': 'Ep7odyv1QC2vDQR2raMvSA', 'name': 'Bob', 'price': 300},
    {'_id': 'W0BrjGQpSES9nfSytvXgMA', 'name': 'Tom', 'price': 200},
    {'_id': 'BTiIGSTgR06UhPLhejFctA', 'name': 'Jane', 'price': 200}
]
```

### ORDER BY

```python
base.query('select name, price, year from Bill order by year')
```

Result

```python
[
    {'_id': 'PzBiZklNTGiGJS-4c0_VLw', 'name': 'Bob', 'price': 300, 'year': 2019},
    {'_id': 'f1x3X_8uTtSDUe9D60VlYQ', 'name': 'Tom', 'price': 100, 'year': 2019},
    {'_id': 'NxeaB5pDRFKOItUs_Ugxug', 'name': 'Tom', 'price': 100, 'year': 2020},
    {'_id': 'EvwCWtX3RmKYKHQO9w2kLg', 'name': 'Jane', 'price': 200, 'year': 2020},
    {'_id': 'Ep7odyv1QC2vDQR2raMvSA', 'name': 'Bob', 'price': 300, 'year': 2021},
    {'_id': 'W0BrjGQpSES9nfSytvXgMA', 'name': 'Tom', 'price': 200, 'year': 2021},
    {'_id': 'BTiIGSTgR06UhPLhejFctA', 'name': 'Jane', 'price': 200, 'year': 2021}
]
```

### GROUP BY

```python
base.query('select name, sum(price) from Bill group by name')
```

Result

```python
[
    {'SUM(price)': 600, 'name': 'Bob'},
    {'SUM(price)': 400, 'name': 'Tom'},
    {'SUM(price)': 400, 'name': 'Jane'}
]
```

## DISTINCT

```python
base.query('select distinct name from Bill')
```

Result

```python
[
    {'_id': 'PzBiZklNTGiGJS-4c0_VLw', 'name': 'Bob'},
    {'_id': 'f1x3X_8uTtSDUe9D60VlYQ', 'name': 'Tom'},
    {'_id': 'EvwCWtX3RmKYKHQO9w2kLg', 'name': 'Jane'}
]
```
