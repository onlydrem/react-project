import express from "express";
import bodyParser from "body-parser";

import users from "./routes/users";
import auth from "./routes/auth";
import events from "./routes/events";

let app=express();
app.use(bodyParser.json());

app.use("/api/users",users);
app.use("/api/auth",auth);
app.use("/api/events",events);


app.get("/",(req,res)=>{
    res.send("hello 123456");
})
app.listen(4000,()=>console.log("start server in  localhost:4000"));