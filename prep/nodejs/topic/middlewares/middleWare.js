module.exports = reqFilter = (req, res, next)=>{
    // console.log("reqFilter");
    if(!req.query.age){
        res.send("please provide age")
    } else if(req.query.age<18){
        res.send("make sure you are 18 and above")
    } else {
        next();
    }
}