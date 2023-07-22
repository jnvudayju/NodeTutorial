const fs = require("fs");
const bioData = {
    name: "Uday",
    age: 25,
    channel: "Nodejs tutorials",
};

//console.log(bioData);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData); 

//convert js object to json
//write it to other file
//readfile
//again convert back to js object
//then console it

const jsonData = JSON.stringify(bioData);
console.log(jsonData);
  fs.writeFile("json1.json", jsonData, (err)=>{
    console.log("done");
  });

 fs.readFile("json1.json", "utf-8", (err, data)=>{
      console.log(data);
      const original_data = JSON.parse(data);
     console.log(original_data);
  });

