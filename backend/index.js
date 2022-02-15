const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./database/db");
const imagesRoutes = require("./routes/images");

app.use(express.json());
app.use('/images', express.static('./images'))
app.use('/api/images', imagesRoutes)

app.listen(port,()=>{
    console.log("server listening on port "+ port);
})
