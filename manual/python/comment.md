# Comment

The functions below are related to a series operation of comment within a base. **For calling these functions, please authorized a base by `Base.auth_as_user(login, password)` first.**

#### Add a comment

```python
base.add_comment(table_id, row_id, comment)
```

##### Example

```python
table_id = '0000'
row_id = 'IN6FfRQLR9GAYX-6VHPvvA'
comment = 'comment from seatable-api'

base.add_comment(table_id, row_id, comment) # {'success': True}
```

#### Get the count number of a row's comments

A integer number will be returned.

```python
base.get_comments_count(row_id)
```

##### Example

~~~python
base.get_comments_count('IN6FfRQLR9GAYX-6VHPvvA')
~~~

#### Get comments of a row

```Python
base.get_comments(row_id, page=1, per_page=25)
```

##### Example

~~~python
row_id = "IN6FfRQLR9GAYX-6VHPvvA"
page = 1,
per_page = 2

base.get_comments(row_id, page=page, per_page=per_page)
~~~

The data returned as below:

```Python
{
    "comment_list": [
        {
            'id': 1, # comment_id
            'author': '27e19630f2044e1abe9e86e17e4c8418@auth.local',
            'comment': 'comment content',
            'created_at': '2023-03-10T16:09:30+00:00',
            'updated_at': '2023-03-10T16:09:30+00:00',
            'dtable_uuid': '281bb8dc19fb4257ad5feabccc8a9333',
            'row_id': 'R6anZyjkRJK-HGrqkLvVsA',
            'detail': None,
            'resolved': False
        }
    ],
    "count": 1
}
```

#### Resolve a comment

Mark a comment as resolved

```Python
base.resolve_comment(comment_id)
```

##### Example

~~~python
base.resolve_comment(1) # {'success': True}
~~~

#### Delete a comment

```Python
base.delete_comment(comment_id)
```

##### Example

```Python
base.delete_coment(1) # {'success': True}
```

#### Get comments of a base within days

```Python
base.get_comments_within_days(days)
```

##### Example

~~~python
base.get_comments_within_days(5) # Get the comments within 5 days in a base
~~~

The data returned as below:

```Python
[
    {
        'id': 1,
        'author': '27e19630f2044e1abe9e86e17e4c8418@auth.local',
        'comment': 'comment content',
        'created_at': '2023-03-10T16:09:30+00:00',
        'updated_at': '2023-03-10T16:09:30+00:00',
        'dtable_uuid': '281bb8dc19fb4257ad5feabccc8a9333',
        'row_id': 'R6anZyjkRJK-HGrqkLvVsA',
        'detail': None,
        'resolved': False
    },
    {
        'id': 3,
        'author': '27e19630f2044e1abe9e86e17e4c8418@auth.local',
        'comment': 'comment content on another row',
        'created_at': '2023-03-10T16:09:30+00:00',
        'updated_at': '2023-03-10T16:09:30+00:00',
        'dtable_uuid': '281bb8dc19fb4257ad5feabccc8a9333',
        'row_id': 'Vwnx6xEFS6qjgbhZAUNM7Q',
        'detail': None,
        'resolved': True
    },
  .....
]
```