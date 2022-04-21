const express = require("express");
const { dirname } = require("path");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3039, ()=>{console.log("Servidor corriendo en http://localhost:3039")});

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});