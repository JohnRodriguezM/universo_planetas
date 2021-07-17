var dibujo = document.getElementById("canvis");
var lienzo = dibujo.getContext("2d");


var a = document.getElementById("textolineas");
var b = document.getElementById("botonlineas");
var c = document.getElementById("textolineas1");
var d = document.getElementById("botonlineas1");
var e = document.getElementById("colorcito");

b.addEventListener("click",dibujoporclick);
d.addEventListener("click",dibujoporclick2);
e.addEventListener("click",elegircolor);

function elegircolor(){
  var color = e.value;
}


function dibujoporclick() {

    let ancho = dibujo.width;
    let lineas = a.value;
    let espacio = ancho / lineas;

    for (i=0;i<a.value;i++){
       
       let yi = espacio * i;
       let xf = espacio * (i + 1);
       dibujar_linea(e.value,1,yi,xf,1000);

    }
    
    }

function dibujoporclick2()
{
     
  let ancho2 = dibujo.width;
  let lineas2 = c.value;
  let espacio2 = ancho2 / lineas2;

  for (let i2 = 0; i2 < c.value; i2++) {

    let xf1 = espacio2 * i2;
    dibujar_linea(e.value,500,0,xf1,1000);
      
      
  }
}
    
    
function dibujar_linea(color,xinicial,yinicial,xfinal,yfinal){

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();


}

dibujar_linea(e.value,1,1,1,999);
dibujar_linea(e.value,1,999,999,999);
dibujar_linea(e.value,999,999,999,1);
dibujar_linea(e.value,999,1,1,1);
