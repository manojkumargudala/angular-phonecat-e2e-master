var xlsx = require('xlsx');
var path = require('path');
var log4js = require('log4js');
var node_xj = require("xls-to-json");
var node_xlsx = require('node-xlsx');
var csvToJson = require('convert-csv-to-json');
var fs = require('fs');
var mysql = require('mysql');

log4js.configure('./config/log4js.json');
describe('Test SQL database', function() {

  it('Test Actual database Connection  ', async function() {

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Admin@123456",
       database: "dbname"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query("SELECT * FROM example", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    });
  });

  it('Test Actual database Connection  ', function() {

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Admin@123456",
       database: "dbname"
    });
    var sql="INSERT INTO example ( id, name ) VALUES ( null, 'Sample data 10' )";

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    });
  });

  it('Test Actual database Connection  ', function() {

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Admin@123456",
       database: "dbname"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query("SELECT * FROM example", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    });
  });
});
