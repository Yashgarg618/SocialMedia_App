const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const {mongoUrl}=require("./keys");
const cors=require('cors');



app.use(cors())
require('./models/model')
require('./models/post')
app.use(express.json())
app.use(require("./routes/auth"))
mongoose.connect(mongoUrl)
app.use(require("./routes/createPost"))
mongoose.connection.on("connected",()=>{
    console.log("successfully connected to mongo") 
})

mongoose.connection.on("error",()=>{
    console.log("not connected to mongodb") 
})
app.listen(PORT,()=>{
    console.log("server is running on"+" " +PORT)
})