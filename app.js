var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());


var router = express.Router();


var libros= [
  {
    "id":0,
    "title":"El señor de los anillos",
    "autor":"J.R.r TOLKIEN"
  },
  {
    "id":1,
    "title":"Jim Boton y Lucas el maquinista.",
    "autor":"Michael Ender."
  },
  {
    "id":2,
    "title":"Juego de Tronos",
    "autor":"Ceorge R Martin."

  }
]




router.get('/', function(req,res){
  res.send("Yeeeaaaaahhhh estoy en marcha");
});

router.get('/pringaillo/',function(req, res){
  res.send("hola pringaillo 2 ");
})
router.get('/pringaillo/:nombre',function(req, res){
  var nombre = req.params.nombre;
  res.send("hola pringaillo "+ nombre);
})

router.get('/libros/',function (req,res){
    res.status(200).jsonp(libros);
});


router.get('/libros/:id',function(req,res){
  res.status(200).jsonp(libros[req.params.id]);
})


router.post('/libros/', function(req, res){
    var libro = req.body;
    libros.push(libro);
    res.send(200).jsonp(libros);

});


router.put('/libros/:id', function (req, res){
  var id_libro = req.params.id;
  var libro = req.body;

  libros.forEach(function (elemento, indice, array){

       if(indice==id_libro){
         console.log("Localizado ->"+elemento.title);
         elemento.title =libro.title;
         elemento.autor = libro.autor;
       }

  })
    res.status(200).jsonp(libros);
})

router.post('/pringaillo', function (req,res){
  var info= req.body.name;
  console.log(info);
  res.status(200).send();
})

router.delete('/libros/:id', function(req, res){
  libros.splice(req.params.id,1);
  res.status(200).send();
})

app.use(router);

app.listen(3000, function(){
  console.log("Yeeeaaaahhh nuestro primer servidor")
});
