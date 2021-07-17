var c = document.getElementById("area_de_dibujo");
var lienzo = c.getContext("2d");
var x = 10;
var y = 10;
var dibujo = document.addEventListener("keyup",dibujarTeclado );

var teclas = {
   UP: 38,
   DOWN: 40,
   LEFT: 37,
   RIGHT: 39
};



function dibujar_linea(color,xinicial,yinicial,xfinal,yfinal){

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();


}
dibujar_linea("red", 10,10,11,11);



function dibujarTeclado(evento){


    var colorcito = "blue";

    if(evento.keyCode == teclas.UP){
        
        dibujar_linea(colorcito,x,y,x,y -10);
        y = y - 10;
    }

    if(evento.keyCode == teclas.DOWN){

        dibujar_linea(colorcito,x,y,x,y + 10);
        y = y + 10;
    }

    if(evento.keyCode == teclas.LEFT){

        dibujar_linea(colorcito,x,y,x - 10,y);
        x = x - 10;
    }

    if(evento.keyCode == teclas.RIGHT){

        dibujar_linea(colorcito,x,y,x + 10,y);
        x = x + 10;
    }
    
  }
