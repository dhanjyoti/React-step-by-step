// const http = require("http");
// const PORT = 5001;

// http.createServer((req, res)=>{
//     res.writeHead(200,{"Content-type":"application/json"});
//     res.write(JSON.stringify({name:"Dhan", email:"abc@gmail.com"}));
//     res.end();
// }).listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// // Api
// const http = require("http");
// const data = require("./data");
// http.createServer((req, res)=>{
//     res.writeHead(200,{"Content-type":"application/json"});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5001);


// // Creating and deleting files
// const fs = require('fs');

// const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// } else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// } else {
//     console.log("invalid output")
// }



// // create multiple files
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// // for(let i=0; i<5; i++){

// //     fs.writeFileSync(dirPath+`/hello${i}.txt`, "A simple text file")
// // }

// fs.readdir(dirPath,(err, files)=>{
//     files.forEach((item)=>{
//         console.log('file name is: ',item);
//     })
// })


// CURD
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'curd');
// const filePath = `${dirPath}/applee.txt`;

// fs.writeFileSync(filePath, "this is a simple txt file");
// fs.readFile(filePath,"utf8", (err, item)=>{
//     console.log(item);
// })
// fs.appendFile(filePath, "This is new txt",(err)=>{
//     if(!err) console.log("file updated")
// });
// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated");
// })
// fs.unlinkSync(`${dirPath}/fruit.txt`);