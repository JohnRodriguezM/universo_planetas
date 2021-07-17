var a = document.getElementById("pizarrita");
var lienzo = a.getContext("2d");
var c = a.addEventListener("mouseup",dibujando_Mouse,);
var estado = 1;
var x;
var y;


function dibujando_Mouse(evento){
  
 


    if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
      dibujar_linea("red", x, y, evento.layerX, evento.layerY,);
    }
    
    x = evento.layerX;
    y = evento.layerY;
    
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