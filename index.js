var express = require("express");
var app = express();


app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views","./views");

const folderImages = './public/slidephotos';
const fs = require("fs");
var images = [];

fs.readdir(folderImages , (err,files) => {
  files.forEach(file => {
    var image = {
      src : "slidephotos\/"+file ,
      desc : "Images "+file
    };
    images.push(image);
  });
});
app.get('/', function (req, res) {
	res.render("index", {images :images});
});
app.get("/get-images",function (req, res) {
	res.render("images", {images : images});
})

app.listen(3000);
