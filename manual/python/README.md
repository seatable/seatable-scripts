# SeaTable Python script

The Python script runs on the server side and can be set to automatically run periodically, which is suitable for more complex data processing scenarios.

Python scripts can be run on your local machine or uploaded to the SeaTable cloud to run. Local operation is convenient for development and debugging, and scripts can be easily integrated into larger projects.

## How to make the script support both local and cloud run

When the script runs in the cloud, it will provide a context object, which contains the server URL auto generated by the system and the API token of base. If you run the script in local, you need to manually specify these two variables; the API token can be generated in the drop-down menu "Advanced -> API Token" of the table.

Use the following method to make the script support both local and cloud run

```Python
from seatable_api import Base, context

server_url = context.server_url or 'https://cloud.seatable.io'
api_token = context.api_token or 'c3c75dca2c369849455a39f4436147639cf02b2d'


base = Base(api_token, server_url)
base.auth()
```

## Dependencies that need to be installed to run the script local

The script need to install `seatable-api` when run in local.

```
pip3 install seatable-api
```

Requirements

* Python >= 3.5
* requests
* socketIO-client-nexus

## A simple example

This following example shows how to query records from a base and update them using queryset.

```
base = Base(api_token, server_url)
base.auth()

queryset = base.filter('Table1', "age>18 and gender='male'")
elder_queryset = queryset.filter("age > 70")
for row in elder_queryset:
    print(row)

update_row_data = {'paid': True}
updated_rows = elder_queryset.update(update_row_data)

deleted_count = elder_queryset.delete()
```

## How to monitor base changes when you run script locally

You can run monitor base changes using socketIO as following:

```
from seatable_api import Base
from seatable_api.constants import UPDATE_DTABLE

server_url = 'https://cloud.seatable.io/'
api_token = 'xxxxxx'

base = Base(api_token, server_url)
base.auth(with_socket_io=True)

# You can overwrite this event

def on_update_seatable(data, index, *args):
    print(data)

base.socketIO.on(UPDATE_DTABLE, on_update_seatable)
base.socketIO.wait()  # forever
```


## Reference

Data structure of object in SeaTable:

* [Data structure](../data-structure.md)

SeaTable API introduction:

* [Base](base.md)
* [Rows](rows.md)
* [QuerySet](queryset.md)
* [Links](links.md)
* [Columns](columns.md)
* [Files](files.md)
* [Account](account.md)
* [Context](context.md)
* [Constants](constants.md): Some constant definitions
* [Libs](libs.md): List of Python libraries supported for import in the cloud


## Example

You can find some easy to understand examples through this link[https://github.com/seatable/seatable-scripts/tree/master/examples/python](https://github.com/seatable/seatable-scripts/tree/master/examples/python)

Detail as follow

* [send_email.py](https://github.com/seatable/seatable-scripts/tree/master/examples/python/send_email.py): Read pictures/files in one table as attachments and send email to contacts in another table