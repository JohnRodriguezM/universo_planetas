// Inicio proyecto Js //
//--------------------//
//No importa poscicion de las funciones, al inicio siempre se cargan en memoria//
//La poscicion de las variables si es un factor importante//
// ---------------//
// declaracion variables a y lienzo que corresponden al elemento canvas //
var a = document.getElementById("dibujito"); var lienzo = a.getContext("2d");
//funcion dibujar_linea, su proposito es dibujar dentro del canvas//
function dibujar_linea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath(); lienzo.strokeStyle = color; lienzo.lineWidth = 4; lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal); lienzo.stroke(); lienzo.closePath();
}
dibujar_linea("blue",100,10,100,180); dibujar_linea("red",50,150,100,180); dibujar_linea("yellow",150,150,100,180);

// declaracion variables caja texto y boton - peso mercurio - peso neptuno //
var c = document.getElementById("texto_mercurio"); var d = document.getElementById("boton_mercurio");
var e = document.getElementById("texto_venus"); var f = document.getElementById("boton_venus");
var g = document.getElementById("texto_marte"); var h = document.getElementById("boton_marte");
var i = document.getElementById("texto_jupiter"); var j = document.getElementById("boton_jupiter");
var k = document.getElementById("texto_saturno"); var l = document.getElementById("boton_saturno"); 
var m = document.getElementById("texto_urano"); var n = document.getElementById("boton_urano");
var x = document.getElementById("texto_neptuno"); var xx = document.getElementById("boton_neptuno");
var y = document.getElementById("texto_sol"); var yy = document.getElementById("boton_sol");
var z = document.getElementById("texto_luna"); var zz = document.getElementById("boton_luna");



// cajas addEventlistener//
var a_1 = d.addEventListener("click", peso_1); var a_2 = f.addEventListener("click", peso_2);
var a_3 = h.addEventListener("click", peso_3); var a_4 = j.addEventListener("click", peso_4);
var a_5 = l.addEventListener("click", peso_5); var a_6 = n.addEventListener("click", peso_6);
var a_7 = xx.addEventListener("click", peso_7); var a_8 = yy.addEventListener("click", peso_8);
var a_9 = zz.addEventListener("click", peso_9);

//funciones pesos//

function peso_1(){const g_tierra = 9.8; const g_mercurio = 3.77 ; 
let peso_final = c.value * g_mercurio / g_tierra; peso_final = peso_final.toFixed(2);
document.getElementById("parrafo1").innerHTML = "tu peso en mercurio es " + peso_final + " kilogramos";}
function peso_2(){const g_venus = 8.87; const g_tierra = 9.8; 
let peso_final = e.value * g_venus / g_tierra; peso_final = peso_final.toFixed(2);
document.getElementById("parrafo2").innerHTML = "Tu peso en venus es " + peso_final + " kilogramos";}
function peso_3(){const g_tierra = 9.8;const g_marte = 3.721;
let peso_final = g.value * g_marte / g_tierra;peso_final = peso_final.toFixed(2);
document.getElementById("parrafo3").innerHTML = "Tu peso en Marte es " + peso_final + " Kilogramos";}
function peso_4(){const g_tierra = 9.8; const g_jupiter = 24.7;
let peso_final = i.value * g_jupiter / g_tierra; peso_final = peso_final.toFixed(2);
document.getElementById("parrafo4").innerHTML = "Tu peso en Júpiter es " + peso_final + " Kilogramos";}
function peso_5(){const g_tierra = 9.8;const g_saturno = 10.44;
let peso_final = k.value * g_saturno / g_tierra;peso_final = peso_final.toFixed(2);
document.getElementById("parrafo5").innerHTML = "Tu peso en Saturno es " + peso_final + " Kilogramos";}
function peso_6(){const g_tierra = 9.8;const g_urano = 9.0;
let peso_final = m.value * g_urano / g_tierra;peso_final = peso_final.toFixed(2);
document.getElementById("parrafo6").innerHTML = "Tu peso en Urano es " + peso_final + " Kilogramos";}
function peso_7(){const g_tierra = 9.8;const g_neptuno = 11.1;
let peso_final = x.value * g_neptuno / g_tierra;peso_final = peso_final.toFixed(2);
document.getElementById("parrafo7").innerHTML = "Tu peso en Neptuno es " + peso_final + " Kilogramos";}
function peso_8(){const g_tierra = 9.8;const g_sol = 274;
let peso_final = y.value * g_sol / g_tierra;peso_final = peso_final.toFixed(2);
document.getElementById("parrafo8").innerHTML = "Tu peso en el Soooool es " + peso_final + " Kilogramos";}
function peso_9(){const g_tierra = 9.8;const g_luna = 1.62 ;
let peso_final = z.value * g_luna / g_tierra;peso_final = peso_final.toFixed(2);
document.getElementById("parrafo9").innerHTML = "Tu peso en la Luna es " + peso_final + " Kilogramos"; }

//Finalizacion del proyecto... por ahora//
//-------------------------------------//










