# Base object

Base represents a table. You can use two methods to obtain authorization to read and write a base. One way is to use the api token of the base, the token can be directly generated on the web side. Read directly from context.api_token in the cloud environment.

Another method is to use the account name and password to initialize an Account object, and then call the Account interface to get a base object. The first method is more secure.

## Get authorization

Use the API Token of the base to get access authorization.

##### Example

```
from seatable_api import Base, context

server_url = context.server_url or 'https://cloud.seatable.cn'
api_token = context.api_token or 'c3c75dca2c369849455a39f4436147639cf02b2d'

base = Base(api_token, server_url)
base.auth()
```

## Metadata

#### Get metadata

##### Example

```python
base.get_metadata()
```

Return

```python
{
	'tables': [{
		'_id': '4krH',
		'name': 'Contact',
		'is_header_locked': False,
		'columns': [{
			'key': '0000',
			'type': 'text',
			'name': 'Name',
			'editable': True,
			'width': 200,
			'resizable': True,
			'draggable': True,
			'data': None,
			'permission_type': '',
			'permitted_users': []
		}, {
			'key': 'M31F',
			'type': 'text',
			'name': 'Email',
			'editable': True,
			'width': 200,
			'resizable': True,
			'draggable': True,
			'data': None,
			'permission_type': '',
			'permitted_users': []
		}],
		'views': [{
			'_id': '0000',
			'name': 'Default view',
			'type': 'table',
			'is_locked': False,
			'filter_conjunction': 'And',
			'filters': [],
			'sorts': [],
			'groupbys': [],
			'group_rows': [],
			'groups': [],
			'colorbys': {},
			'hidden_columns': [],
			'rows': [],
			'formula_rows': {},
			'link_rows': {},
			'summaries': {},
			'colors': {}
		}]
	}]
}
```

## Table

#### add table

Add a table into a base

```python
base.add_table(table_name, lang='en')
```

* lang: languages, default by English ('en'), currently support English('en') and Chinese('zh-cn')

##### Example

```python
base.add_table('Investigation', lang='zh-cn')
```



## Operation on Base

The Base object provides interfaces for operating rows and columns, uploading and downloading files, etc. Please refer to the following documents

* [Rows](rows.md)
* [Links](links.md)
* [Columns](columns.md)
* [Files](files.md)

