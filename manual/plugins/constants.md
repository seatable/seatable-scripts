# Constants

There are some constants in the script that we need to understand

## ColumnTypes

Column type, when inserting/adding column, changing column type, gettingng column formatter, etc. need to be used

```javascript
import { CELL_TYPE } from 'dtable-sdk';

CELL_TYPE.NUMBER              // number
CELL_TYPE.TEXT                // text
CELL_TYPE.LONG_TEXT           // long text
CELL_TYPE.CHECKBOX            // checkbox
CELL_TYPE.DATE                // date
CELL_TYPE.SINGLE_SELECT       // single select
CELL_TYPE.MULTIPLE_SELECT     // multiple select
CELL_TYPE.IMAGE               // image
CELL_TYPE.FILE                // file
CELL_TYPE.COLLABORATOR        // collaborator
CELL_TYPE.LINK                // Link to other records
CELL_TYPE.FORMULA             // formula
CELL_TYPE.LINK_FORMULA        // link formula
CELL_TYPE.CREATOR             // creator
CELL_TYPE.CTIME               // created time
CELL_TYPE.LAST_MODIFIER       // modifier
CELL_TYPE.MTIME               // modified time
CELL_TYPE.GEOLOCATION         // geolocation
CELL_TYPE.AUTO_NUMBER         // auto number
CELL_TYPE.URL                 // URL
CELL_TYPE.EMAIL               // enail
CELL_TYPE.BUTTON              // button
CELL_TYPE.RATE                // rate
```

## Column icon configs

Icon configuration information corresponding to the column type

```javascript
import { CELL_TYPE, COLUMNS_ICON_CONFIG } from 'dtable-store';

const text = CELL_TYPE.TEXT;
// value: 'dtable-font dtable-icon-single-line-text'
const textIconClass = COLUMNS_ICON_CONFIG[text];  

const single_select = CELL_TYPE.SINGLE_SELECT;
// value: 'dtable-font dtable-icon-single-election'
const singleSelectIconClass = COLUMNS_ICON_CONFIG[single_select]; 

...

// Note: iconClass is used to display the icon of the column (dtable-font is needed)
```

## Column options

The basic configuration information of the column, it is necessary to get the icon configuration of the column and the prompt information of different column types

```javascript
import { CELL_TYPE, COLUMN_OPTIONS } from 'dtable-sdk';

const text = CELL_TYPE.TEXT;
// textOption : 
// {
//    type: 'text',
//    iconClass: 'dtable-font dtable-icon-single-line-text'  
//    iconName: 'Text'
// }
const textOption = COLUMN_OPTIONS.find(option => option.type === text); 

const singleSelect = CELL_TYPE.SINGLE_SELECT;
// singleSelectOption : 
// {
//    type: 'single-select',
//    iconClass: 'dtable-font dtable-icon-single-election'  
//    iconName: 'Single_Select'
// }
const singleSelectOption = COLUMN_OPTIONS.find(option => option.type === singleSelect); 

...

// Note: iconClass is used to display the icon of the column (dtable-font needs to be introduced)
//     iconName can be used for internationalization, display prompt messages or text messages

```

## Formula result type

Formula column and link formula column calculation result type summary, used to determine the calculation result of the column type related to the calculation

```javascript
import { FORMULA_RESULT_TYPE } from 'dtable-sdk';

FORMULA_RESULT_TYPE.NUMBER     // number
FORMULA_RESULT_TYPE.STRING     // string
FORMULA_RESULT_TYPE.DATE       // date
FORMULA_RESULT_TYPE.BOOL       // bool
FORMULA_RESULT_TYPE.ARRAY      // array
```

## Select option colors

When creating and modifying single select column/multiple select column options, the text color, background color, and border color of the option are provided

```javascript
import { SELECT_OPTION_COLORS } from 'dtable-sdk';

// const SELECT_OPTION_COLORS = [
//   {COLOR: '#FFFCB5', BORDER_COLOR: '#E8E79D', TEXT_COLOR: '#202428'},
//   {COLOR: '#FFEAB6', BORDER_COLOR: '#ECD084', TEXT_COLOR: '#202428'},
//   {COLOR: '#FFD9C8', BORDER_COLOR: '#EFBAA3', TEXT_COLOR: '#202428'},
//   {COLOR: '#FFDDE5', BORDER_COLOR: '#EDC4C1', TEXT_COLOR: '#202428'},
//   {COLOR: '#FFD4FF', BORDER_COLOR: '#E6B6E6', TEXT_COLOR: '#202428'},
//   {COLOR: '#DAD7FF', BORDER_COLOR: '#C3BEEF', TEXT_COLOR: '#202428'},
//   {COLOR: '#DDFFE6', BORDER_COLOR: '#BBEBCD', TEXT_COLOR: '#202428'},
//   {COLOR: '#DEF7C4', BORDER_COLOR: '#C5EB9E', TEXT_COLOR: '#202428'},
//   {COLOR: '#D8FAFF', BORDER_COLOR: '#B4E4E9', TEXT_COLOR: '#202428'},
//   {COLOR: '#D7E8FF', BORDER_COLOR: '#BAD1E9', TEXT_COLOR: '#202428'},
//   {COLOR: '#B7CEF9', BORDER_COLOR: '#96B2E1', TEXT_COLOR: '#202428'},
//   {COLOR: '#E9E9E9', BORDER_COLOR: '#DADADA', TEXT_COLOR: '#202428'},
//   {COLOR: '#FBD44A', BORDER_COLOR: '#E5C142', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#EAA775', BORDER_COLOR: '#D59361', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#F4667C', BORDER_COLOR: '#DC556A', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#DC82D2', BORDER_COLOR: '#D166C5', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#9860E5', BORDER_COLOR: '#844BD2', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#9F8CF1', BORDER_COLOR: '#8F75E2', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#59CB74', BORDER_COLOR: '#4EB867', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#ADDF84', BORDER_COLOR: '#9CCF72', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#89D2EA', BORDER_COLOR: '#7BC0D6', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#4ECCCB', BORDER_COLOR: '#45BAB9', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#46A1FD', BORDER_COLOR: '#3C8FE4', TEXT_COLOR: '#FFFFFF'},
//   {COLOR: '#C2C2C2', BORDER_COLOR: '#ADADAD', TEXT_COLOR: '#FFFFFF'},
// ];

// When creating an option, you can provide related options, or you can use a random function to automatically generate the corresponding option color

const colorIndex = (Math.random() * SELECT_OPTION_COLORS.length).toFix(0);
const selectColor = SELECT_OPTION_COLORS[colorIndex];

```

## Table permission type

Permission type of table

```javascript
import { TABLE_PERMISSION_TYPE } from 'dtable-sdk';

TABLE_PERMISSION_TYPE.DEFAULT              // 'default', default permissions
TABLE_PERMISSION_TYPE.ADMINS               // 'admins', person with administrative rights  
TABLE_PERMISSION_TYPE.SPECIFIC_USERS       // 'specific_users', specific user
TABLE_PERMISSION_TYPE.NONE                 // 'none', no one can change table
```

