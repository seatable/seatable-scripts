# Context

When the script is running in the cloud, the context object provides a context environment. Here's how to use it

```Python
from seatable_api import context

context.server_url # Server URL, used to initialize Base
context.api_token  # API token for access a base
context.current_table  # The name of the table that the current user is viewing when the user runs a script manually
context.current_row # When the user manually runs a script, the line where the cursor is currently located
context.current_username # The System ID of the user who runs the script manually (in old verison, it is called current_user_id)
context.current_id_in_org # The id of the user in the team, it can be set by the team admin via Web UI
```


