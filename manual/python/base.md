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

## Operation on Base

The Base object provides interfaces for operating rows and columns, uploading and downloading files, etc. Please refer to the following documents

* [Rows](rows.md)
* [Links](links.md)
* [Columns](columns.md)
* [Files](files.md)

