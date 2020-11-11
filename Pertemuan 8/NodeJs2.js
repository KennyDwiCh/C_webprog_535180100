var fs = require("fs");
var buf = new Buffer(1024);


// Asynchronous read 
fs.readFile('input.txt' , function(err, data){
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

console.log("Writing to existing File");
fs.writeFile('input.txt' , 'Simple Learning Node Js' , function(err){
    if (err){
        return console.error(err);
    }
    console.log("Data File wrote Successfully");
    console.log("Let's read newly written data");

    fs.readFile('input.txt' , function(err, data){
        if (err) {
            return console.log(err);
        }
        console.log("Asynchronous read = " + data.toString());
    });
});

fs.open('input.txt' , 'r+' , function(err,fd){
    if (err){
        return console.error(err);
    }
    console.log("Data File opened Successfully");
    console.log("Going to read data file");

    fs.read(fd, buf, 0, buf.length, 0 ,function(err, bytes){
        if (err) {
            return console.log(err);
        }
        console.log(bytes + " Bytes read");

        // print only read bytes to avoid junk
        if (bytes > 0){
            console.log(buf.slice(0,bytes).toString());
        }
        fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
            console.log("File closed successfully");
        });
    });
});