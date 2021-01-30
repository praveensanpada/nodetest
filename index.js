var express = require('express');
var app =express();

app.get('/',(req,res)=>{
	res.send("Hello");
})

app.get('/*',(req,res)=>{
res.send("Page Not Found")
})

app.listen(8087);