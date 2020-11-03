const originTableName = 'Attendance table';
const originViewName = 'Default view';
const originNameColumnName = 'Name';
const originDepartmentColumnName = 'Department';
const originDateColumnName = 'Date';
const originTimeColumnName = 'Attendance time';

const targetTableName = 'Statistics attendance';
const targetNameColumnName = 'Name';
const targetDepartmentColumnName = 'Department';
const targetDateColumnName = 'Date';
const targetStartTimeColumnName = 'Clock-In';
const targetEndTimeColumnName = 'Clock-Out';
const targetTable = base.getTableByName(targetTableName);

const table = base.getTableByName(originTableName);
const view = base.getViewByName(table, originViewName);
const rows = base.getRows(table, view);

// sort the rows in the table according to the date column;
rows.sort((row1, row2) => {
	if (row1[originDateColumnName] < row2[originDateColumnName]) {
      return -1;
    } else if (row1[originDateColumnName] > row2[originDateColumnName]) {
      return 1;	
    } else {
      return 0;
    }
});

/*
 group all rows via date and save them to groupedRows, the format
 of the object is {'2020-09-01': [row, ...], '2020-09-02': [row, ...]}
*/
const groupedRows = {};
rows.forEach((row) => {
  const date = row[originDateColumnName]; 
  if (!groupedRows[date]) {
    groupedRows[date] = [];
  }
  groupedRows[date].push(row);
});

const dateKeys = Object.keys(groupedRows);

// traverse all the groups in groupedRows
dateKeys.forEach((dateKey) => { 
  // get all attendance data of all members on the current date
  const dateRows = groupedRows[dateKey];
  const staffDateStatItem = {};
  // traverse these rows of data and group by the name of the employee, get the clock-in and clock-out time of each employee that day, and save it to staffDateStatItem
  // the format is { a1: {Name: 'a1', Date: '2020-09-01', Clock-In: '08:00', Clock-Out: '18:00'},... }
  dateRows.forEach((row)=> {
    const name = row[originNameColumnName];
    if (!staffDateStatItem[name]) {
      // Generate a new row based on the original row data, and add Clock-In and Clock-Out columns in the newly generated row
      staffDateStatItem[name] = { [targetNameColumnName]: name, [targetDateColumnName]: row[originDateColumnName], [targetDepartmentColumnName]: row[originDepartmentColumnName], [targetEndTimeColumnName]: row[originTimeColumnName], [targetStartTimeColumnName]: row[originTimeColumnName]};
    } else {
      // when the column name of the row is repeated, compare the time, choose the largest one as the Clock-Out time, and the smallest one as the Clock-In time
      const time = row[originTimeColumnName];
      const staffItem = staffDateStatItem[name];
      if (compareTime(staffItem[targetStartTimeColumnName], time)) {
        staffItem[targetStartTimeColumnName] = time;
      } else if (compareTime(time, staffItem[targetEndTimeColumnName])) {
        staffItem[targetEndTimeColumnName] = time;
      } 
    }
  });

  // write the attendance data of all employees on the current date into the table
  Object.keys(staffDateStatItem).forEach((name) => {
    base.addRow(targetTable, staffDateStatItem[name]);
  });  
});

// compare the size of two string format time
function compareTime(time1, time2) {
  const t1 = time1.split(':');
  const t2 = time2.split(':');
  if (parseInt(t1[0]) > parseInt(t2[0])) {
    return true;
  } else if (parseInt(t1[0]) < parseInt(t2[0])) {
    return false; 
  } else if (parseInt(t1[0]) == parseInt(t2[0])) {
    if (parseInt(t1[1]) > parseInt(t2[1])) {
      return true;
    } else {
      return false;
    }
  }
}
