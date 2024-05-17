const configs = require("./src/config");
const {connect} = require("./src/db");

const main = async ()=>{
    await connect({uri: configs.URI});
}

(async()=>{
    try{
        await main();
    } catch(err){
        console.log(err);
    }
})();