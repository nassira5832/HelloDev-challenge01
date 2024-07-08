const mongoos=requare("mongoos") 
async function connectToDb (url) { 
await mongoos.connect (url, {
dbname:"lenom"
}
)}
modele.export= connectToDb