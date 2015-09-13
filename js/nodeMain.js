/**
   @module ABLParser
   @submodule example
*/

/**
   An example Node based use of the ABLParser
   @class nodeMain
 */
var fs = require('fs');
var ABLModule = require('./ABLModule');


fs.readFile(process.argv[2],'utf8',function(err,data){
    console.log("File Loaded");
    console.log("Selection: ",data.slice(0,300));
    var result = ABLModule.parse(data);
    console.log("Result:",result);

    //save the data to json:
    var outFileName = process.argv[2].replace(".abl",".json");
    fs.writeFile(outFileName,JSON.stringify(result,null,4),function(err){
        if(err){
            return console.log(err);
        }
        console.log("Data written to: ",outFileName);
    });

    
});
