import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.header import Header
from urllib import parse

import requests
from seatable_api import Base, context


server_url = context.server_url
api_token = context.api_token

base = Base(api_token, server_url)

base.auth()


# set the parameters required for smtplib

# the sender and recipient below are for mail transmission.

smtpserver = 'smtp.163.com'
username = '13069744444@163.com'
password = 'PAXBERVGCMPKGIJJ'
sender = '13069744444@163.com'


# the recipient is multiple recipients
# you can specify an email address
receivers = ['1223408888@qq.com']

# if you want to use the inbox in the table, for example
# there is a table named Contacts, the table has a column named Email, which stores the email addresses

receiver_rows = base.list_rows('Contacts')
receivers = [row['Email'] for row in receiver_rows if row.get('Email')]

subject = 'SeaTable Send email'

# the text encoded by the Header object contains utf-8 encoding information and Base64 encoding information. The following name test ok
# subject = 'Title'
# subject=Header(subject, 'utf-8').encode()

# construct the mail object MIMEMultipart object
# the following subject, sender, recipient, and date are displayed on the mail page

msg = MIMEMultipart('mixed')
msg['Subject'] = subject
msg['From'] = '13069744444@163.com <13069744444@163.com>'

# msg['To'] = 'XXX@126.com'

# the recipient is multiple recipients, and the list is converted to a string separated by ; through join

msg['To'] = ";".join(receivers) 

# construct text content

# text = "Hi!\nHow are you?\nHere is the link you wanted:\nhttp://www.google.com"
# text_plain = MIMEText(text,'plain', 'utf-8')
# msg.attach(text_plain)


# construct html
# if you want to read a file from SeaTable as the text, please refer to Get File Download Link in SeaTable Script Programming Manual

html = """
<html>
  <head></head>
  <body>
    <p>Hi!<br>
       This is a sample of messages
       from SeaTable
    </p>
  </body>
</html>
"""

text_html = MIMEText(html,'html', 'utf-8')
msg.attach(text_html)

# construct attachments, read files from SeaTable to construct attachments, just an example, please change as needed

rows = base.list_rows('Table3')
filename = rows[0]['File'][0]['name']
file_url = rows[0]['File'][0]['url']  # get the file URL
path = file_url[file_url.find('/files/'):]
download_link = base.get_file_download_link(parse.unquote(path))  # get file download link

try:
    response = requests.get(download_link)
    if response.status_code != 200:
        print('Failed to download image, status code: ', response.status_code)
        exit(1)
except Exception as e:
    print(e)
    exit(1)

text_att = MIMEText(response.content, 'base64', 'utf-8')
text_att["Content-Type"] = 'application/octet-stream'
text_att["Content-Disposition"] = 'attachment;filename*=UTF-8\'\'' + parse.quote(filename)

msg.attach(text_att)

# send email

smtp = smtplib.SMTP()
smtp.connect('smtp.163.com')

smtp.login(username, password)
smtp.sendmail(sender, receivers, msg.as_string())
smtp.quit()
