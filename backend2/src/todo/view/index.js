import {Router} from "express";
import controller from "../controller/index.js";

const router = Router();

router.get("/user", (req, res)=>{
    const user = controller.getUser();

    return res.json(user);
});

router.get("/get-user", (req, res)=>{
    res.json({
        message: "hello guys",
    })
})

export default router;