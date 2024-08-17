const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");

const bodyParser = require("body-parser");
const cors = require("cors");

const app=express();

mongoose.set("strictQuery",true);//Deprection Warning // To supress warning
mongoose.connect("mongodb+srv://test:12345@cluster0.mbi9wsc.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>console.log("Conected to DB"));
db.on("error",()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());




app.use("/studentRoute",studentRoute);
app.listen(4000,()=>
{
    console.log("Server started at 4000");
})