const mongoose = require("mongoose");
const db = mongoose.connect(process.env.MONGOSRV).then(()=>{
    console.log("Conectado a mongodb!")
}).catch((err)=>{
    console.log("Ocurrió un error al conectar a mongodb: "+err)
});

module.exports = {
    db
}