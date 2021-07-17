var a = document.getElementById("texto_cajero");
var b = document.getElementById("boton_cajero");
var c = b.addEventListener("click", calcular);
var d = document.getElementById("parrafo");



function calcular()

{

    for (var bii of caja)
    
    {


        if(a.value > 0 )
     {
     
          div = Math.floor(a.value / bii.valor);
        
         if (div > bii.cantidad)
        {
            papeles = bii.cantidad;
        }   
        else
        {
        papeles = div;
        }
        entregado.push(new billete(bii.valor,papeles));
        a.value -= (bii.valor * papeles) ;
     }

     }
        if(a.value > 0)
        {
            
            d.innerHTML = "soy un cajero pobre";

        }
        else
        {
          for (var e of entregado)
          
          {
            if (e.cantidad > 0)
            {
                
                d.innerHTML += + e.cantidad + "billete de  $" + e.valor + "<br/>";
            } 
           }
        }

            
     }

        



class billete {

    constructor( valor , cantidad)
    {
        
        
        this.valor = valor;
        this. cantidad = cantidad;
       
        
    }

    
    
}






var caja =  [];
var entregado = [];
caja.push(new billete("100","5"));
caja.push(new billete("50","3"));
caja.push(new billete("20","2"));
caja.push(new billete("10","2"));




var div = 0;
var papel_moneda = 0;





