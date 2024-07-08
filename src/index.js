const express=require("express");
const mongoose=require("mongoose");
const {handleNotFound, handleInternalServerError, validateRequestBody}= require("./middlewares/FalseKnight")
const routes= require("./routes/FalseKnight")
const app=express();
const  connecttodb = require("./database/main")
const dotenv = require('dotenv');
dotenv.config();
// challenge01
app.use(express.json());
app.use(validateRequestBody);
app.use("/api", routes);
app.use(handleNotFound);
app.use(handleInternalServerError);

const dbUrl = process.env.DATABASE_URL;
const port= 5000;
async function start(){
    try{
    await connecttodb(dbUrl)
    app.listen(port, ()=>{console.log("my server started ")})
    }catch(error){
      console.log("erreur ", error)
    }};
   
 start();