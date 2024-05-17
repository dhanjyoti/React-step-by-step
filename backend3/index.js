import todoModule from "./src/modules/todo/index.js";
import startApp from "./src/utils/app/index.js";
import configs from "./src/utils/config/index.js";
import {myconnect} from "./src/utils/db/index.js";

const main = async()=>{
    // await myconnect({uri:configs.URI});
    const app = startApp();
    todoModule(app);
}
(async()=>{
    try{
        await main();
    } catch(err){
        console.log(err, "not able to connect");
    }
})();