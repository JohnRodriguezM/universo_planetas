//variables usadas para traer el canvas del html al js y agregarle interactividad

var a = document.getElementById("dibujito");
var lienzo = a.getContext("2d"); 


//una funcion ahorra mucho trabajo y lineas de codigo a los programadores, al permitir que esa misma funcion se reutilce en otra parte del codigo
//las variables que se declaren dentro de una funcion se quedan en esa funcion ("concepto de ambito")
//la var dentro de un bloque solo tiene un alcance local y solo tiene alcance ddentro del bloque que se creo
// y sus bloques hijos, pero no en bloques hermanos ni padres
//una variable definida afuera es una variable global y podra ser usada en cualquier bloque

//esta es la funcion que nos permite dibujar dentro del canvas
function dibujar_linea (color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();

}

//agregue lineas que me permiten dibujar margenes
dibujar_linea("red",1,1,1,999);
dibujar_linea("red",1,999,999,999);
dibujar_linea("red",999,999,999,1);
dibujar_linea("red",999,1,1,1)

//trajo elemento a traves del getElementById
var b = document.getElementById("textico");
var c = document.getElementById("botoncito");
var d = document.getElementById("textico2");
var e = document.getElementById("botoncito2");

c.addEventListener("click",dibujoporclick);
e.addEventListener("click",dibujoporclick2);
// el addEventListener de c y de e funciona igual

var f = document.getElementById("colorcito");
f.addEventListener("click",elegircolor);
//el addEventListener se activa a traves del llamado a la var f, que el la que trae la caja de color del html por el id = "colorcito"

//activa la eleccion de color a pesar de no tener contenido
function elegircolor(){
  
}

//la funcion que crea los dibujos a traves de lineas, se usan ciclos para ser repetitivos
//el valor de una caja de texto se obtiene a traves del atributo value

function dibujoporclick2() {

  let colorcito = f.value;  
  let ancho2 = a.width;
  let lineas2 = d.value;
  let espacio2 = ancho2/lineas2;
  let i2 = 0;

  do {
    xf1 = espacio2 * i2;
    dibujar_linea(f.value,500,0,xf1,1000);
    i2++
  } while (i2<d.value);


}
 //este es el ciclo do While, es un ciclo muy poco usado pero que me parece muy eficaz, "hacer mientras" hacer, ¿que? - dibujar lineas-
 //cumpliendo unos parametros, mientras, ¿que? mientras que i2 < d.value


    
//al igual que la anterior funcion, esta nos permite dibujar, y para que sea un dibujo uniforme lo hacemos a traves de un ciclo

function dibujoporclick() {

var color = f.value;
var ancho = a.width;
var lineas = b.value;
var espacio = ancho / lineas;

for (var i = 0; i < b.value; i++) {
    
    
    let yi = espacio * i;
    let xf = espacio * (i + 1);
    dibujar_linea(f.value,1,xf,yi,1000);
}

}

// el ciclo for es el mas usado, establece 3 parametros que son las "condiciones" para que se ejecute, y luego se llama la funcion que dibuja
//que seria la funcion llamar linea
//ese tambien es un beneficio de las funciones, se pueden llamar dentro de otra funcion y sin necesidad de volver a escribir ese codigo















  