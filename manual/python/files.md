# Files

#### get downlaod link by path

Get the file download link

```python
# path: The relative path of the file in the Base
base.get_file_download_link(path)
```

##### Example

```python
# Suppose you get the url of a file from Base's data:
# https://dev.seafile.com/dtable-web/workspace/74/asset-preview/41cd05da-b29a-4428-bc31-bd66f4600817/files/2020-10/aur7e-jqc19.zip
# The way to get the download link is:
download_link = base.get_file_download_link('files/2020-10/aur7e-jqc19.zip')
# If you want to download, use this link to download, in the example, using the requests library, which you can do with other libraries
response = requests.get(download_link)
```

#### get file upload link

Get the upload link to upload the file, return a dictionary with the upload link in it
When you upload, requires two parameters, parent_dir and relative_path, please see the example for details

```python
# return a dict
# {
#     "parent_path": "xxxxx",
#     "upload_link": "https://xxxxxx"
# }
base.get_file_upload_link()
```

##### Example

```python
upload_link_dict = base.get_file_upload_link()
# Upload files, use the requests library, you can use other library operations
parent_dir = upload_link_dict['parent_path']
upload_link = upload_link_dict['upload_link'] + '?ret-json=1'
response = requests.post(upload_link, data={
    'parent_dir': parent_dir,
    'relative_path': relative_path,
    'replace': 1 if replace else 0  # Do you want to replace if the file with the same name has been uploaded
}, files={
    'file': (name, open(file_path, 'rb'))  # The file to be uploaded
})
```

Pure API operation is very simple, but if it is a complete operation, such as:

Intercept path, get download link, download, save

Or

Get upload link, read the file, set parameters, upload

If the code is more rigorous, you must also check the status of each request in the middle, etc.

Very cumbersome, so the following will show the upload/download file API after wrap the above process for your use

#### download file

Download the file

```python
# Save the file to the path save_path
base.download_file(file_url, save_path)
```

##### Example

```python
# Download the file to this file path
base.download_file('https://dev.seafile.com/dtable-web/workspace/74/asset-preview/41cd05da-b29a-4428-bc31-bd66f4600817/files/2020-10/screen%20(3).png', 'files/screen.png')
```

#### upload file in memory

```python
# name: File name after upload
# content: File contents, is a bytes object
# relative_path: Upload relative path, is the path of the Base's attachments
# file_type: image or file, default is file
# relative_path and file_type cannot be Note at the same time, if relative_path is None, the value is {file_type}s/{today-month}, like: files/2020-09
# replace: Whether to replace if there is a file with the same name in the directory
# return: Return the info dict of the uploaded file
# {
#     'type': str,
#     'size': int,
#     'name': str,
#     'url': str
# }
base.upload_bytes_file(name, content: bytes, relative_path=None, file_type=None, replace=False)
```

##### Example

```python
reponse = requests.get('http://xxxxxx.png')
info_dict = base.upload_bytes_file('file.png', response.content, file_type='file', replace=False)
with open('file.png', 'rb') as f:
    content = f.read()
info_dict = base.upload_bytes_file('file.png', content, file_type='image', replace=False)

# If you need to update row
# Update the image column, assuming that the picture column named img, then:
row['img'].append(info_dict.get('url'))
base.update_row('TableName', row['_id'], row)

# Update the file column, assuming that the file column named file, then:
row['file'].append(info_dict)
base.update_row('TableName', row['_id'], row)

# Of course, if there is no picture/file column in that row, then:
row['img'] = [info_dict.get('url')]
# row['file'] = [info_dict]
base.update_row('TableName', row['_id'], row)

# If insert a new row
row = {
    'img': [info_dict.get('url')],
    'file': [info_dict]
}
base.append_row('real-img-files', row)
```

#### upload local file

```python
# file_path: The file path
# name: File name after upload, if it is None, it is the name of the file
# relative_path: Upload relative path, is the path of the Base's attachments
# file_type: image or file，default is file
# relative_path and file_type cannot be Note at the same time, if relative_path is None, the value is {file_type}s/{today-month}, like files/2020-09
# replace: Whether to replace if there is a file with the same name in the directory
# return: Return the info dict of the uploaded file
# {
#     'type': str,
#     'size': int,
#     'name': str,
#     'url': str
# }
base.upload_local_file(file_path, name=None, relative_path=None, file_type=None, replace=False)
```

##### Example

```python
info_dict = base.upload_local_file('files/file.png', name='upload.png', relative_path=None, file_type='image', replace=True)

# If you need to update row, please refer to the example of upload file in memory
```
