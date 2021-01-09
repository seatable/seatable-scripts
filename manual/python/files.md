# Files

We provides two sets of functions for file uploading and downloading. The first is simple ones, the second is detailed ones, which split the process of downloading/uploading into two steps: 1. get the downloading/uploading link; 2. downloading/uploading the files. The second set is for handling complicated situations such as large file uploading.

## Download

### Simple method

Download a file to a local path

```python
base.download_file(file_url, save_path)
```

* file_url:  URL of the file, obtained from the cell of file or image column
* save_path: local path in which the file will be saved after downloading

##### Example 

```python
file_url = "https://cloud.seatable.io/workspace/74/asset-preview/41cd05da-b29a-4428-bc31-bd66f4600817/files/2020-10/aur7e-jqc19.zip"
save_path = "/tmp/files/custom.zip"
base.download_file(file_url, save_path)
```

### Detailed method

1)  Get the download link by the URL of the file

Consider that your have a file in your base with URL https://dev.seafile.com/dtable-web/workspace/74/asset-preview/41cd05da-b29a-4428-bc31-bd66f4600817/files/2020-10/aur7e-jqc19.zip

```python
# Call the API by using the part of the URL after the UUID str
download_link = base.get_file_download_link('files/2020-10/aur7e-jqc19.zip')
```

2)  Get the file content

```python
import requests
response = requests.get(download_link)
```

## Upload

### Simple method

#### Upload a file from memory

```python
base.upload_bytes_file(name, content, file_type='file', replace=False)
```

* name: the file name after uploading 
* content:  file content , which is a bytes object
* file_type:  image or file, default is file if not set
* replace: replace the file of save name,  default by False

Return 

```python
{
    'type': str,  
    'size': int, 
    'name': str, 
    'url': str, 
}
```

##### Example 1, upload a file from website

```python
import requests
file_url = 'http://www.google.com/xxx/xxx/xxx.txt'
response = requests.get(file_url)
info_dict = base.upload_bytes_file = ('my_uploaded_file.txt', response.content)
```

##### Example 2, upload a file from local

```python
local_img_file = '/Users/Desktop/a.png'
with open (local_img_file, 'rb') as f:
  content = f.read()
info_dict = base.upload_bytes_file = ('my_uploaded_img.png', content, file_type='image')
```


#### Upload file by local file path

```python
base.upload_local_file(file_path, name=None, file_type='file', replace=False)
```

* file_path: loacl path of file
* name:  the file name after uploading, using local file name if it is not set
* file_type:  image or file, default is file if not set
* replace: replace the file of save name,  default by False

Return 

```python
{
    'type': str,  
    'size': int, 
    'name': str, 
    'url': str, 
}
```

##### Example

```python
local_file = '/Users/Desktop/a.png'
info_dict = base.upload_local_file(local_file, name='my_uploaded_img.png', file_type='image', replace=True)
```

#### Update image/file cells in table

The step we discussed above is just for uploading file. We need to update the contents of the cells using the returned information too. Here is an example of updating a table named 'Table1' in a base.  

```python
# Insert a image into a cell in the image column named 'img_col'
img_url = info_dict.get('url')
row['img_col'] = [img_url]
base.update_row('Table1', row['_id'], row)

# Insert a file into a cell in the file column named 'file_col'
row['file_col'] = [info_dict]
base.update_row('Table1', row['_id'], row)

# Insert a file/image into a cell which already have contents
row['img_col'].append([img_url])
base.update_row('TableName', row['_id'], row)
row['file_col'].append([info_dict])
base.update_row('Table1', row['_id'], row)
```

### Detailed method

Get a file upload link

```python
base.get_file_upload_link()
```

Return

```python
{
  "parent_path": "/asset/3a9d8266-78.....",		
  "upload_link": "https://..../upload-api/ea44c4f4...../"
}
```

* parent_path: the relative parent folder assigned by the server, which will be used when uploading files

##### Example

Consider that we want to upload the local file "/User/Desktop/file.txt" to the server

```python
# Get the upload link and file path allocated by server
upload_link_dict = base.get_file_upload_link()
parent_dir = upload_link_dict['parent_path']
upload_link = upload_link_dict['upload_link'] + '?ret-json=1'

# Upload the file
upload_file_name = "file_uploaded.txt" 
replace = 1 
response = requests.post(upload_link, data={
    'parent_dir': parent_dir,
    'replace': 1 if replace else 0 
}, files={
    'file': (upload_file_name, open('/User/Desktop/file.txt', 'rb'))
})
```
