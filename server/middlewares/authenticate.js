//中间件创建
import jwt from 'jsonwebtoken';
import config from '../config'
import { userInfo } from 'os';


export default(req,res,next)=>{
    const authorizationHeader=req.headers['authorization'];   //取到头部信息

    let token;
    if(authorizationHeader){   //判断头部的内容
        token=authorizationHeader.split(' ')[1];
    }

    if(token){
        jwt.verify(token,config.jwtSecret,(err,decoded)=>{
            if(err){
                res.status(401).json({error:"Filed to authenticate"});
            }else{
                User.query({
                        where:{id:decoded.id},
                        select:['email','id','username']
                    }).fetch().then(user=>{   //去数据库中请求数据
                    if(!user){
                        res.status(404).json({error:"No such user"});
                    }else{
                        req.currentUser=user;
                        next()
                    }
                })
            }
        })
    }else{
        res.status(403).json({
            error:'No token provid'
        });
    }
}