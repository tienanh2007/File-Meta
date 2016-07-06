var express = require("express")
var multer = require('multer')
var app = express()
app.get('/',function(req,res){
  res.sendFile(__dirname + "/view.html")
})
app.post('/',multer({}).single('upload'),function(req,res){
  console.log(req.body)
  console.log(req.file)
  res.send(req.file.size+"")
})
app.listen(process.env.PORT||3000,function(){
  console.log("listening on port")
})
