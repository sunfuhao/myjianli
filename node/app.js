var mysql=require("mysql");  
const http = require("http");
const url = require("url");
const fs = require("fs");
const mysql = require("mysql");

var pool = mysql.createPool({  
    host: 'localhost',  
    user: 'user',  
    password: 'password',  
    database: 'database',  
    port: port  
});  
  