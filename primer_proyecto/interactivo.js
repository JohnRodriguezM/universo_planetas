// Inicio proyecto Js //

// declaracion variables a y lienzo que corresponden al elemento canvas //

var a = document.getElementById("dibujito");
var lienzo = a.getContext("2d");


//funcion dibujar_linea, su proposito es dibujar dentro del canvas//
function dibujar_linea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 4;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujar_linea("black",100,10,100,180);
dibujar_linea("black",50,150,100,180);
dibujar_linea("black",150,150,100,180);

//por hacer... (funciones, get elements,  PROYECTO PESO EN OTRO PLANETA)