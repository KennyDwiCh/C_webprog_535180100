var fs = require("fs");

console.log("Deleting an existing file");
fs.unlink('input.txt' , function(err){
    if(err){
        return console.log(err);
    }
    console.log("Data deleted successfully");
});