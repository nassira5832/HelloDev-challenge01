const mongoose=require("mongoose") 
async function connectToDb (url) { 
await mongoose.connect (url, {
dbname:"lenom"
}
)}
module.exports= connectToDb