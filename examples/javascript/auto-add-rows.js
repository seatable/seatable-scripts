// Automatically record monthly repetitive items in a ledger

const table = base.getTableByName('Daily expenses');

// get date objects on the 10th and 20th of the current month
var date = new Date();
var date10 = new Date(date.setDate(10));
var date20 = new Date(date.setDate(20));

// create two new expense items
var feeAWS = {'Name': 'Amazon cloud service', 
              'Date': base.utils.formatDate(date10),
              'Type': 'Cloud service'
             };
var feeClean = {'Name': 'Clean', 
                'Date': base.utils.formatDate(date20),
                'Type': 'Daily office',
                'Fee': 260
               };

// auto add data               
base.addRow(table, feeAWS);
base.addRow(table, feeClean);
