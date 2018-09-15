import express from "express";
import isEmpty from "lodash/isEmpty";
import validator from "validator";

//下载brcypt
import bcrypt from "./bcrypt"
import { WSAEUSERS } from "constants";

let router =express.Router();

//验证表单 用validator插件
const validateInput=(data)=>{
    let errors={};

    if(validator.isEmpty(data.username)){
        errors.username="the files is required";
    }
    if(validator.isEmpty(data.email)){
        errors.email="the files is required";
    }
    if(!validator.isEmail(data.email)){
        errors.password="email is error";
    }
    if(validator.isEmpty(data.password)){
        errors.password="the files is required";
    }
  
    if(validator.isEmpty(data.passwordComfmation)){
        errors.passwordComfmation="the files is required";
    }
    if(validator.equals(data.password,data.passwordComfmation)){
        errors.passwordComfmation="password must match";
    }

    return{
        erroes,
        isValid:isEmpty(errors)
    }
}


router.get('./:identifer',(req,res)=>{
    User.query({
        select:["username", "email"],
        where:{email:req.params.identifer},
        orWhere:{username:req.params.identifer}
    }).fetch().then(user=>{
        res.json({user})
    })
})
router.post("/",(req,res)=>{
   const {errors,isValid}=validateInput(req.body)

   if(isValid){
       const {username,password,email}=req.body;
       const password_digest=bcrypt.hashSync(password,10)   //加密后的密钥
       

       Users.forge({    //添加保存到数据库
           username,password_digest,email

       },{hashTimeStaps:true}).save()
       .then(user=>res.json({success:true}))
       .catch(err=>res.status(500).json({errors:error}))
       
   }else{
    res.status(400).json(errors);
   }
});

export  default router;