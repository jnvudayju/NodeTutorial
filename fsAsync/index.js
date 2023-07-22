const fs = require("fs");
fs.writeFile('read.txt', "Today is awesome day : " , 
(err) => {console.log("file is created");
});

fs.appendFile('read.txt', "But what about tomorrow",
(err) => {
    console.log("task completed");
});

 fs.readFile("read.txt", "UTF-8", (err,data)=>{
    console.log(data); 
});
console.log("after the data"); 
