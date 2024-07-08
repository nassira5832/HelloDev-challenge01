const express=require("express");
const mongoose=require("mongoose");
const {handleNotFound, handleInternalServerError, validateRequestBody}= require("./middlewares/FalseKnight")
const routes= require("./routes/FalseKnight")
const app=express();
// challenge01
app.use(express.json());
app.use(validateRequestBody);
app.use("/api", routes);
app.use(handleNotFound);
app.use(handleInternalServerError);

const port= 5000;
app.listen(port, () => {
    console.log(`Serveur API connecté au port ${portAPI}`);
});
