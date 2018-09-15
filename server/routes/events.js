import express from "express";

//定义一个中间件
import authenticate from "../middlewares/authenticate";



let router =express.Router();

//验证表单 用validator插件


router.post('/',(req,res)=>{
    res.status(201).json({user:req.currentUser})
})


export  default router;