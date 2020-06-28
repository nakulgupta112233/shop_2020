const express = require('express');
const path = require('path')
const app=express();
var bodyParser = require('body-parser');

const SERVER_PORT = process.env.PORT || 1111
app.use(bodyParser.json());


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/' , express.static(path.join(__dirname,'public')))
//app.use('/a' , express.static(path.join(__dirname,'public_2')))
app.use('/api',require ('./routes/api').route)

app.listen(SERVER_PORT,()=>
{
    console.log("server started on https://localhost:1111");
})