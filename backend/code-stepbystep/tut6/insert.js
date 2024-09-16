const dbConnect = require('./mongodb');

const insertData = async ()=>{
    const data = await dbConnect()
    const result = await data.insertMany(
       [ {name:'max 5', brand:'vivo', price:11422, category:'mobile'},
         {name:'max 190', brand:'vivo', price:23422, category:'mobile'},
         {name:'max 15', brand:'vivo', price:33422, category:'mobile'},
       ]
    )
    console.log(result.acknowledged)
    if(result.acknowledged){
        console.log("data inserted")
    }
}

insertData();