# Notifications

#### Send toast notifications

Send a nofication message which can be toasted on web page to a user.

```python
base.send_toast_notification(username, msg, toast_type='success')
```

* toast_type:  one of  "success", "warning", "danger"

##### Example

```python
base.send_toast_notifation(
"aea9e807bcfd4f3481d60294df74f6ee@auth.local",
  "error request",
  "danger"
)
```