var c = document.getElementById("canvitas");
var lienzo = c.getContext("2d");
var b = document.getElementById("botoncito");





function dibujoporclick()
{
  alert("holis");
var texto = document.getElementById("textico");
 var b = document.getElementById("botoncito");
 b.addEventListener("click",dibujoporclick);
 
 
}




function dibujar_linea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();

}

for (var i = 0; i < 30; i++) {

  var yi = 10 * i;
  var xf = 10 * (i + 1);
  dibujar_linea("blue",1,xf,yi,300);
   
   }

  


 




