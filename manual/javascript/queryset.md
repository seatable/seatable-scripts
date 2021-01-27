## QuerySet object

The return value of the base.filter function, this object provides some methods to simplify the operation of the filterd data

#### querySet.all

Returns all filtered data in the form of a list

##### Example

```javascript
const list = querySet.all();
```

#### querySet.count

Returns the number of filtered rows

##### Example

```javascript
const count = querySet.count();
```

#### querySet.last

Return the last filtered data

##### Example

```javascript
const row = querySet.last();
```

#### querySet.first

Return the first filtered data

##### Example

```javascript
const row = querySet.first();
```

#### querySet.delete

Delete all filtered rows and return the number of successfully deleted

##### Example

```javascript
const count = querySet.delete();
```

#### querySet.update

Modify the row data and return the updated data

##### Example

```javascript
// Modify the contents of the Name column of all filtered rows to xxxx
const rows = querySet.update({Name: 'xxxx'});
```

#### querySet.filter

Further filtering, return a querySet object

##### Example

```javascript
// Filter out the rows with the value of Tom in the Name column of the querySe
const querySet1 = querySet.filter('Name = "Tom"');
```

#### querySet.get

Get a piece of data in the querySet that meets the conditions, and return a row

##### Example

```javascript
// Get the first data of Tom in the Name column of the querySet
const row = querySet.get('Name = "Tom"');
```