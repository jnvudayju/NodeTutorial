const path = require("path");
console.log(path.dirname('C:/Users/amit kumar sharma/Nodejst/PathModule/path.js'));
console.log(path.extname('C:/Users/amit kumar sharma/Nodejst/PathModule/path.js'));
console.log(path.basename('C:/Users/amit kumar sharma/Nodejst/PathModule/path.js'));
console.log(path.parse('C:/Users/amit kumar sharma/Nodejst/PathModule/path.js'));

const myPath = path.parse('C:/Users/amit kumar sharma/Nodejst/PathModule/path.js');
console.log(myPath.name);
console.log(myPath.root);