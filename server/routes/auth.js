import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"   //安装jsonwebtoken
import config from "../config"

let router=express.Router();

router.post('/',(req,res)=>{
    const {identifier,password}=req.body;

    User.query({
        where:{username:identifier},
        orWhere:{email:identifier}
    }).fetch().then(user=>{
        if(user){
            if(bcrypt.compareSync(password.user.get('password_digest'))){
                //http协议里面的存储内容   存储认证信息  无状态协议 前一个请求和现在的请求没有任何关系，不能判断是否是同一个用户  他会记录一些数据，保存在浏览器中，每一次请求都会吧这个信息发送过去cookie 
                // json web Tooken加密信息
                const token=jwt.sign({
                    id:user.get("id"),
                    username:user.get("username"),
                    avatar_img:user.get("avatar_img")   //图片地址
                },congig.jwtSecret);  //生成一个加密的密钥
                res.json({token})
            }else{
                res.status(401).json({errors:{from:"invalid already isvalitid"}})
            }
        }else{
            res.statusMessage(401).json({errors:{from:"invalid already isvalitid"}})
        }
    })
})

export default router;