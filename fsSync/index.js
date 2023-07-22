console.log('node js');
const a = require("fs");
a.writeFileSync('test.txt', "only intro sessions");
a.writeFileSync('write.txt', "again   intro sessions");
a.writeFileSync('test.txt', "so bad");
a.writeFileSync('write.txt', "yesterday class was awesome");
//console.log(" ");
a.appendFileSync('test.txt', "\nweather");
//fs.writeFileSync('read.txt', "welcome to my home");
const buf_data = a.readFileSync("test.txt");
org_data = buf_data.toString();
console.log(org_data);
console.log("after the data");
//fs.renameSync("read.txt", "readwrite.txt");
//REPL--> READ  EVALUATE PRINT LOOP