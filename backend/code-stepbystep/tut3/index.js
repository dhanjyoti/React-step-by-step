// const fs = require('fs');

// const input = process.argv;
// console.log(input);

// if(input[3] == 'add'){
//     fs.writeFileSync(input[3], input[4])
// } else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3])
// } else {
//     console.log("invalid input")
// }

// const fs = require('fs');
// // fs.writeFileSync('apple.txt', 'this is a apple file')
// const path = require('path');
// const dirPath = path.join(__dirname, "files");
// // for(i=0; i<5; i++){
// //     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text file")
// // }

// fs.readdir(dirPath, (err, files)=>{
//     // console.log(files)
//     files.forEach((item)=>{
//         console.log("file name is ",item)
//     })
// })

const fs = require("fs");
const path = require('path');
const dirPath = path.join(__dirname, 'curd');
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath, "this is a simple text file");

// fs.readFile(filePath, 'utf8', (err, item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath, "and file name is apple.txt", (err)=>{
//     if(!err) console.log("file is updated")
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=> {
//     if(!err) console.log("file name is updated")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)