import router from "./view/index.js";

const todoModule = (app)=>{
    app.use("/todo", router);
};

export default todoModule;