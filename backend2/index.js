const configs = require("./src/config");
const { connect } = require("./src/db");

const main = async ()=>{
    connect({ uri: configs.URI});
};

(async ()=>{
    try {
        await main();
    } catch (err){
        console.error(err);
    }
})();