# Account

Account provides an interface to list all Workspaces, add/copy/delete Bases, and obtain access rights to a Base.

## Authorized login

Use email/password to log in, if you want to call other APIs provided by Account, you need to log in first

##### Example

```python
from seatable_api import Account
email = 'xiongxxx@xxx.com'
password = 'xxxxxxx'
server_url = 'https://cloud.seatable.cn/'
account = Account(email, password, server_url)
account.auth()
```


## Workspace

A Workspace is a collection of user's Bases or a collection of group's Bases

#### List workspaces

Get all your workspaces and its Bases

##### Example

```python
account.list_workspaces()
```

Return

```python
 {
 	"workspace_list": [{
 		"id": 13740,      // workspace id
 		"repo_id": "cd9a97a6-9214-4eeb-b609-4295530b9018",
 		"table_list": [{  // base object
 			"id": 24022,
 			"workspace_id": 13740,
 			"uuid": "69771c2e-b51e-4fe4-b721-01cd1950e68c",
 			"name": "q",
 			"creator": "122",
 			"modifier": "122",
 			"created_at": "2020-10-26T14:43:02+08:00",
 			"updated_at": "2020-10-26T14:43:02+08:00",
 			"color": null,
 			"text_color": null,
 			"icon": null,
 			"starred": false
 		}],
 		"owner_name": "122",
 		"owner_type": "Personal"
 	}],
 	"starred_dtable_list": []
}
```



## Base

Add/copy/delete Base, interface to get access to Base

#### Add a base

Add a base to a Workspace 

```python
account.add_base(name, workspace_id=None)
```

* workspace_id: to which the base will be added, user's own workspace by default if set to None

##### Example

```python
account.add_base('new-base')
account.add_base('new-base', 35)
```

#### Copy a base

Copy a base to a workspace

```python
account.copy_base(src_workspace_id, base_name, dst_workspace_id)
```

* src_workspace_id: source workspace
* dst_workspace_id: target workspace

Copy a base named base_name from src_workspace to dst_workspace

##### Example

```python
account.copy_base(35, 'img-file', 74)
```

#### Get a base

Get a base object

```python
# Get the Base object named base_name that exists in the workspace whose id is workspace_id
# Base object has been authorized, it is not necessary to call base.auth()
account.get_base(workspace_id, base_name)
```

##### Example

```python
base = account.get_base(35, 'img-file')
```

