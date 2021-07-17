var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 40;
var l = 0;

var lineas2 = 40;
var l2 = 0;

var lineas3 = 40;
var l3 = 0;

var lineas4 = 40;
var l4 = 0;


function dibujar_linea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

do {
  var yi = 10 * l;
  var xf = 10 * (l + 1);
  dibujar_linea("blue",1,xf,yi,400);
  l = l + 1;

} while (l<lineas);

do {
  var yi1 = 10 * l2;
  var xf1 = 400 - 10 - (l2 * 10);
 dibujar_linea("red",399,yi1,xf1,399);
 l2 = l2 + 1;
} while (l2<lineas2);

do {
  var xi = 10 * l3;
  var yf = 10 * (l3 + 1);
  dibujar_linea("yellow",xi,1,399,yf);
  l3 = l3 + 1;

} while (l3<lineas3);

do {
  var xi1 = 10 * l4;
  var yf1 = 400 - 10 - (l4 * 10);
  dibujar_linea("yellow", xi1,1,1,yf1);
  l4 = l4 + 1;
} while (l4<lineas4);
