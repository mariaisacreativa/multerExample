const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./database/db");
const imagesRoutes = require("./routes/images");
const cors= require("cors");

app.use(express.json());
app.use(cors());
app.use('/images', express.static('./images'))
app.use('/api/images', imagesRoutes)

app.listen(port,()=>{
    console.log("server listening on port "+ port);
})
