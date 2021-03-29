# Message

### WeChat message

```python
base.send_wechat_msg(account_name, msg)
```

* account_name： the name of third party wechat group account set in the base
* msg： message you want to send

**Example**

```python
base.send_wechat_msg("My wechat group", "Good day everyone!")
```

### Email

```python
base.send_email(account_name, msg, **kwargs)
```

* account_name: the name of third party email account set in the base
* msg：message you want to send

* kwargs including：
    * send_to (neccessary)：email receivers, can be set to a list.
    * subject  (necessary)： email subject.
    * from：email sender, default by host user
    * copy_to:  the email which you want to copy to , can be set to a list
    * reply_to: the email to which you want the receivers reply 

**Example**

```python
base.send_email(
 	"My email account",
	"Pleach check the info....",
  subject="Test",
  send_to=['350178982@qq.com',"r350178982@126.com"],
  copy_to=['jiwei_ran@sina.com','xxxx@xx.com']
)
```

