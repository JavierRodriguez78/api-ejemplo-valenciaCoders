var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());


var router = express.Router();




router.get('/', function(req,res){
  res.send("Yeeeaaaaahhhh estoy en marcha");
});

router.get('/pringaillo',function(Req, res){
  res.send("hola pringaillo");
})

app.use(router);

app.listen(3000, function(){
  console.log("Yeeeaaaahhh nuestro primer servidor")
});
