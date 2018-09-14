import express from "express";
import isEmpty from "lodash/isEmpty";
import validator from "validator";

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

router.post("/",(req,res)=>{
   const {errors,isValid}=validateInput(req.body)

   if(isValid){
       res.json({success:true});
       
   }else{
    res.status(400).json(errors);
   }
});

export  default router;