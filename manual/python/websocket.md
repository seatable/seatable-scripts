# Websocket

## Get real-time data update notifications

By using websocket, you can get real-time data update notifications of a Base just like the SeaTable webpage.

##### Example

```python
from seatable_api import Base

server_url = 'https://cloud.seatable.cn'
api_token = 'c3c75dca2c369849455a39f4436147639cf02b2d'

base = Base(api_token, server_url)
base.auth(with_socket_io=True)

base.socketIO.wait()
```

When Base has data updated, the following will be output in the terminal.

```log
2022-07-19 11:48:37.803956 [ SeaTable SocketIO connection established ]
2022-07-19 11:48:39.953150 [ SeaTable SocketIO on UPDATE_DTABLE ]
{"op_type":"insert_row","table_id":"0000","row_id":"YFK9bD1XReSuQ7WP1YYjMA","row_insert_position":"insert_below","row_data":{"_id":"RngJuRa0SMGXyiA-SHDiAw","_participants":[],"_creator":"seatable@seatable.com","_ctime":"","_last_modifier":"seatable@seatable.com","_mtime":""},"links_data":{}}
```

### After getting data update notifications, customize subsequent operations

By overriding the UPDATE_DTABLE event, you can customize the subsequent operations.

##### Example

```python
import json
from seatable_api import Base
from seatable_api.constants import UPDATE_DTABLE

server_url = 'https://cloud.seatable.cn'
api_token = 'c3c75dca2c369849455a39f4436147639cf02b2d'

def on_update(data, index, *args):
    try:
        operation = json.loads(data)
        print(operation)
        op_type = operation['op_type']
        table_id = operation['table_id']
        row_id = operation['row_id']
        # ... do something
    except Exception as e:
        print(e)

base = Base(api_token, server_url)
base.auth(with_socket_io=True)

base.socketIO.on(UPDATE_DTABLE, on_update)
base.socketIO.wait()
```
