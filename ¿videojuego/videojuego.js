function aleatorio(min,max){
    
    var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
   
 
}

var vp = document.getElementById("villavicencio");
var lienzo = vp.getContext("2d");
var mapa = "tile.png";
var cerdo = "cerdo.png";
var vaca = "vaca.png";
var pollo = "pollo.png"


var fondo = new Image ();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var imagen_cerdo = new Image();
imagen_cerdo.src = cerdo;
imagen_cerdo.addEventListener("load",dibujar);

var imagen_vaca = new Image();
imagen_vaca.src = vaca;
imagen_vaca.addEventListener("load",dibujar);

var imagen_pollo = new Image();
imagen_pollo.src = pollo;
imagen_pollo.addEventListener("load",dibujar);

function dibujar(){

    

    lienzo.drawImage(fondo,0,0);

    for (c = 0; c < 4; c++) {

        var alea = aleatorio(0,420);
        var alea_2 = aleatorio(0,420);
  
    lienzo.drawImage(imagen_cerdo,alea,alea_2);
}
    
for (v = 0; v < 4; v++) {

    var alea_3 = aleatorio(0,420);
    var alea_4 = aleatorio(0,420);
    lienzo.drawImage(imagen_vaca,alea_3,alea_4);

    }

    for (p = 0; p < 4; p++) {

        var alea_5 = aleatorio(0,420);
        var alea_6 = aleatorio(0,420);
        lienzo.drawImage(imagen_pollo,alea_5,alea_6);    
        }

    
}

