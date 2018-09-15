var xlsx = require('xlsx');
var path = require('path');
var log4js = require('log4js');
var node_xj = require("xls-to-json");
var node_xlsx = require('node-xlsx');

log4js.configure('./config/log4js.json');

var log = log4js.getLogger("app");
log.debug("thsi is the error log");
log.info("thsi is the info log");
log.warn("thsi is the warn log");
log.error("thsi is the error log");

describe('Comparing grid and excel', function() {

  it('Read Excel changed code test data code', function() {

    const workSheetsFromBuffer = node_xlsx.parse('./spec/sum.xlsx');

    console.log(workSheetsFromBuffer);
  });

  it('Read Excel changed code', function() {

    const workSheetsFromBuffer = node_xlsx.parse('./spec/sum.xlsx');

    console.log(workSheetsFromBuffer);

    var log = log4js.getLogger("app");


     node_xj({
       input: "./spec/sum.xls",  // input xls
       output: "output.json", // output json
       sheet: "ag-grid"  // specific sheetname
     }, function(err, result) {
       if(err) {
         log.error("something is going wrong damm")
         console.log("something is going wrong damm")
         console.error(err);
       } else {
         console.log(result);
       }
     });
     log.info("something is going wrong damm")

    log.info("Trying to read before excel sheet")
    var workbook1 = xlsx.readFile('./spec/sum.xls');
  //  log.info("something is going wrong damm")

    log.info("Trying to read excel sheet")
    var sheetName = workbook1.SheetNames[0];
    var worksheet = workbook1.Sheets[sheetName];
    var sheet_name_list = workbook1.SheetNames;
    var xlData = xlsx.utils.sheet_to_json(workbook1.Sheets[sheet_name_list[0]]);

    var countMap = new Map();

    console.log(xlData);
    for (var k = 0; k < xlData.length - 1; k++) {
      console.log("k avlue is " + k);
      var excelArrayKey = (Object.keys(xlData[k]));
      console.log("Item status is" + xlData[k]["Item Activity Status"]);
      if (xlData[k]["Item Activity Status"] == "Pending") {
        console.log("skipping because of pending");
        continue;
      } else {
      //  console.log("continue because of not pending");
        //console.log("excel array key is " + excelArrayKey);
        for (var j in excelArrayKey) {
          if (excelArrayKey.hasOwnProperty(j)) {
            var keyName = excelArrayKey[j];
          //  console.log("key name is " + keyName);
            if (keyName == "Item Activity Status") {
              continue;
            } else {
              var count = countMap.get(keyName)
              if (count) {
                countMap.set(keyName, count + parseInt(xlData[k][keyName]));
              } else {
                countMap.set(keyName, parseInt(xlData[k][keyName]));
              }
            //  console.log("name " + xlData[k][keyName]);
            }
          }
        }
      }
    }
    console.log(countMap);

  });
  it('Read Excel With my code', function() {

    countMap = new Map();
    console.log("*******************")
    var XLSX = require('xlsx');
    log.info("Trying to read before excel sheet")
    var workbook = XLSX.readFile('./spec/sum.xlsx');
    var sheet_name_list = workbook.SheetNames;
    sheet_name_list.forEach(function(y) {
      var worksheet = workbook.Sheets[y];
      var headers = {};
      var data = [];
      for (z in worksheet) {

        var col = z.substring(0, 1);
        var row = parseFloat(z.substring(1));
        var value = worksheet[z].v;

        // store header names
        if (row == 1) {
          headers[col] = value;
          continue;
        }

        if (!data[row])
          data[row] = {};
        data[row][headers[col]] = value;
      }
      // drop those first two rows which are empty
      data.shift();
      data.shift();
    //  console.log(data);

      for (var k = 0; k < data.length - 1; k++) {
        // console.log("k avlue is " + k);
        var excelArrayKey = (Object.keys(data[k]));
        // console.log("Item status is" + xlData[k]["Item Activity
        // Status"]);
        if (data[k]["Item Activity Status"] == "Pending") {
          // console.log("skipping because of pending");
          continue;
        } else {
          // console.log("continue because of not pending");
          // console.log("excel array key is " + excelArrayKey);
          for (var j in excelArrayKey) {
            if (excelArrayKey.hasOwnProperty(j)) {
              var keyName = excelArrayKey[j];
              // console.log("key name is " + keyName);
              if (keyName == "Item Activity Status") {
                continue;
              } else {
                var count = countMap.get(keyName)
                if (count) {
                //  if(keyName=="Current Modular Store Count"){
                //  console.log(keyName+"\t"+count +"\t" + data[k][keyName]);
                //}
                if(data[k][keyName]){
                  countMap.set(keyName, count +
                    parseFloat(data[k][keyName]));
                  }
                } else {
                  countMap.set(keyName,
                    parseFloat(data[k][keyName]));
                }
                // console.log("name " + xlData[k][keyName]);
              }
            }
          }
        }
      }
      console.log(countMap);
    });
  });
});
