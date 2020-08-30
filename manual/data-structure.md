# Data structure of objects in SeaTable

## Row

Row is an javascript object, use `row['colum_name']` to get the value of a specific cell. There are a few special columns:

* `_id` : The id of the row
* `_creator` : The creator for this row
* `_ctime`: The create time for this row
* `_last_modifier` : The last modifier for this row
* `_mtime`: The last modified time for this row

Different column types have different type of values:

* `simple-text` : string
* `number` : number
* `single-select` : option name, string
* `date` : string, in format `2020-01-01` or `2020-01-01 10:00` 
* `check` : boolean
* `long-text` : Markdown string
* `image` : array, each element of the array is the URL of image
* `multi-select` : array, each element of the array is an option name
* `collaborator` : array, each element of the array is a collaborator's ID
* `link` : array, each element of the array is a link name
* `file` : array, each element of the array is a file object  `[{name: string, url: string, size: number, type: 'file'}]`

## Column

A column object has following fields:

* `key`:  The key of the column, string
* `type` : The type of the column(long-text, single-select, number, file and so on), string
* `name` : The name of the table, string

## Table

A table object has following fields:

* `_id`: The id of the table 
* `name`: The name of the table, string

## View

A view object has following fields:

* `name`: The name of the view, string
