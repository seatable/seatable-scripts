## Output object

Output object supports output strings in text or Markdown format.

##### Text

```javascript
const table = base.getActiveTable();
output.text(table.name);
```

##### Markdown

```javascript
const table = base.getActiveTable()；
output.markdown(`##### ${table.name}`);
```