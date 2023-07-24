# Users

#### Get a user info

A dict contains user's name and id in org will be returned

```python
base.get_user_info(username)
```

##### Example

```python
base.get_user_info("aea9e807bcfd4f3481d60294df74f6ee@auth.local")

# Dict returned as below:
# {"id_in_org": "A0001", "name": "Tom"}
```

