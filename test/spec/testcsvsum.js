var xlsx = require('xlsx');
var path = require('path');
var log4js = require('log4js');
var node_xj = require("xls-to-json");
var node_xlsx = require('node-xlsx');
var csvToJson = require('convert-csv-to-json');
var fs = require('fs');

log4js.configure('./config/log4js.json');

var log = log4js.getLogger("app");
log.debug("thsi is the error log");
log.info("thsi is the info log");
log.warn("thsi is the warn log");
log.error("thsi is the error log");

describe('Comparing grid and excel', function() {

it('Read base csv ', function () {

  fs.readFile('./spec/export.csv', 'UTF-8', function(err, contents) {
      console.log(contents);

      var lines=contents.split("\n");

        var result = [];

        var headers=lines[0].split(",");

        for(var i=1;i<lines.length;i++){

      	  var obj = {};
      	  var currentline=lines[i].split(",");
      //    console.log("****** " + currentline[0].substring(1,currentline[0].length-1) + " *********")
          obj[headers[0].substring(2,headers[0].length-1)] = currentline[0].substring(1,currentline[0].length-1);
      	  for(var j=1;j<headers.length;j++){
      		  obj[headers[j].substring(1,headers[j].length-1)] = parseFloat(currentline[j].substring(1,currentline[j].length-1));
      	  }
      	  result.push(obj);
        }

      //  console.log(JSON.stringify(result)); //JSON
        var countMap = new Map();
        for (var k = 0; k < result.length - 1; k++) {
          // console.log("k avlue is " + k);
          var excelArrayKey = (Object.keys(result[k]));
          // console.log("Item status is" + xlData[k]["Item Activity
          // Status"]);
          if (result[k]["Item Activity Status"] == "Pending") {
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
                  if(result[k][keyName]){
                    countMap.set(keyName, count +
                      parseFloat(result[k][keyName]));
                    }
                  } else {
                    countMap.set(keyName,
                      parseFloat(result[k][keyName]));
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
