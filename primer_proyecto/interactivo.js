// Inicio proyecto Js //

// declaracion variables a y lienzo que corresponden al elemento canvas //

var a = document.getElementById("dibujito");
var lienzo = a.getContext("2d");

var c = document.getElementById("texto_mercurio");
var d = document.getElementById("boton_mercurio")

var e = d.addEventListener("click", peso_1);

function peso_1(){
    const g_tierra = 9.8;
    const g_mercurio = 3.77 ;
    let peso_final = c.value * g_mercurio / g_tierra;
    peso_final = peso_final.toFixed(2);
    alert(" tu peso en mercurio es igual a " + peso_final);
}


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