var a = document.getElementById("canvis");
var lienzo = a.getContext("2d"); 
var x = 10;
var y = 10;

const teclas = {

    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
}


var c = document.addEventListener("keydown", dibujar_Teclado);

function dibujar_Teclado(evento)
{


    var color = "red";

    if (evento.keyCode === teclas.UP) {

        dibujar_linea(color,x,y,x,y - 5);
        y = y - 5;

    }

    if (evento.keyCode === teclas.DOWN) {

        dibujar_linea(color,x,y,x,y + 5);
        y = y + 5;
        
    }

    if (evento.keyCode === teclas.LEFT) {

        dibujar_linea(color,x,y,x - 5,y);
        x = x - 5;
        
    }

    if (evento.keyCode === teclas.RIGHT) {

        dibujar_linea(color,x,y,x + 5,y);
        x = x + ;
        
    }


        
    }


function dibujar_linea(color,xinicial,yinicial,xfinal,yfinal){

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();


}

dibujar_linea("green", 9,9,11,11);