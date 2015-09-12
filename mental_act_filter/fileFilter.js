/**
   Pre-process entire files to filter out mental acts
   USAGE: node fileFilter.js FILENAME
 */

var fs = require('fs');
var maFilter = require('./mentalActFilter');


var fileName = process.argv[2];
var modifiedFileName = "filtered_" + fileName;
console.log("Processing:",fileName);
console.log("Outputing to:",modifiedFileName);

var file = fs.readFile(fileName,'utf8',function(err,data){
    //console.log("Unfiltered:",data);
    var filtered = maFilter(data);
    //console.log("Filtered output:",filtered);
    fs.writeFile(modifiedFileName,filtered,function(err){
        if(err){
            return console.log(err);
        }
        console.log("File Filtered");
    });    
});

