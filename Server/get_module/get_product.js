const express = require("express");
const mongodb = require("mongodb");
const Passport = mangodb.mangoClient;

const get_module = express.Router();

get_module.get("/",(req,res)=>{
    Passport.connect("mongodb+srv://admin:<admin>@cluster0.u7vkgkr.mongodb.net/User_Database?retryWrites=true&w=majority",(err,connection)=>{
    if(err) throw err;
    else{
        const db=connection.db("User_Database");
        db.connection("Passport").find().toArray((err,array)=>{
        if(err) throw err;
        else{
            res.send(array);
        }
     })
    }
});
});
