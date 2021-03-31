# Row, Column, Table, View

## Row

Row is an object, use `row['colum_name']` to get the value of a specific cell. There are a few special columns:

* `_id` : The id of the row
* `_creator` : The creator for this row
* `_ctime`: The create time for this row
* `_last_modifier` : The last modifier for this row
* `_mtime`: The last modified time for this row

## Column

A column object has following fields:

* `key`:  The key of the column, string
* `type` : The type of the column(long-text, single-select, number, file and so on), string
* `name` : The name of the column, string

Different column types have different type of values:

Basic column types:

* `simple-text` : string
* `number` : number
* `checkbox` : boolean
* `date` : string, in format `2020-01-01` or `2020-01-01 10:00` 
* `single-select` : option name, string
* `long-text` : markdown string
* `image` : array, each element of the array is the URL of image
* `file` : array, each element of the array is a file object  `[{name: string, url: string, size: number, type: 'file'}]`
* `multi-select` : array, each element of the array is an option name
* `collaborator` : array, each element of the array is a collaborator's email
* `URL` : string
* `email` :  string
* `duration` : string, in format `h:mm(1:30)` or `h:mm:ss(0:20:30)` 

Advanced column types:

* `formula` : string
* `geolocation` : object, in format `{province: xxx, city: xxx, district: xxx, detail: xxx}`
* `link` : array, each element of the array is a link name
* `auto-number` : number, auto increase

## Table

A table object has following fields:

* `_id`: The id of the table 
* `name`: The name of the table, string

## View

A view object has following fields:

* `name`: The name of the view, string
