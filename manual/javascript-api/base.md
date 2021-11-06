# Base object

Base represents a table. You can use the api token of the form to obtain the authorization to read and write the base. This token can be generated directly on the web side.


## Get authorization

Use the API Token of the base to get access authorization.

##### Example

```javascript
import { Base } from 'seatable-api';

const config = {
  server: 'https://cloud.seatable.cn',
  APIToken: 'c3c75dca2c369849455a39f4436147639cf02b2d'
};

const base = new Base(config);
await base.auth()
```

## Metadata

#### Get metadata

获取 base 的 metadata 信息

```javascript
base.getMetadata();
```

##### Example

```javascript
const metadata = await base.getMetadata();
```

Return

```javascript
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

```javascript
base.addTable(table_name, lang='en')
```

* table_name: The name of the sub-table to be added
* lang: languages, default by English ('en'), currently support English('en') and Chinese('zh-cn')

##### Example

```javascript
await base.addTable('Investigation', lang='zh-cn')
```

## Operation on Base

The Base object provides interfaces for operating rows and columns, uploading and downloading files, etc. Please refer to the following documents

* [Rows](rows.md)
* [Links](links.md)
* [Columns](columns.md)
* [Query with SQL](query.md)

