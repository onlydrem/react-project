import express from "express";
import bodyParser from "body-parser";

import users from "./routes/users";

let app=express();
app.use(bodyParser.json());

app.use("/api/users",users);


app.get("/",(req,res)=>{
    res.send("hello 123456");
})
app.listen(6061,()=>console.log("start server in  localhost:6061"));