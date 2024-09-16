const dbConnect = require("./mongodb");
// let response = await collection.find({}).toArray();
// console.log(response)

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};
main();
