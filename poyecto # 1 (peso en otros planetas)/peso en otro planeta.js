      
      // se traen los id del documento html al documento js a traves del getElementById
      
      var a = document.getElementById("textomercurio");
      var b = document.getElementById("botonmercurio");
      var c = document.getElementById("textovenus");
      var d = document.getElementById("botonvenus");
      var e = document.getElementById("textomarte");
      var f = document.getElementById("botonmarte");
      var g = document.getElementById("textojupiter");
      var h = document.getElementById("botonjupiter");
      var i = document.getElementById("textosaturno");
      var j = document.getElementById("botonsaturno");

      var k = document.getElementById("textourano");
      var l = document.getElementById("botonurano");



     // el addEventListener es un ("escuchador de eventos"), un evento es una funcion que ocurre cuando pasa algo, ej: un click.


      b.addEventListener("click",peso_1 );
      d.addEventListener("click",peso_2);
      f.addEventListener("click",peso_3);
      h.addEventListener("mouseover",peso_4);
      j.addEventListener("mousedown", peso_5);
      l.addEventListener("mouseup", peso_6);
      


      // en el documento inicial de peso en otros planetas se uso prompt para obtener la informacion de los usuarios, pero para este programa -
      // usamos una caja (input), para obtener la informacion de los usuarios, sin embargo seguimos dando unicamenente la respuesta a traves de -
      // un alert debido a que no se ha encontrado la manera de hacerlo de otra forma------ ESTO ESTA MUY PENDIENTE
      
      

      function peso_1() {
       
       const g_mercurio = 3.7;
       const g_tierra = 9.8;
       let peso_final = a.value * g_mercurio / g_tierra;
       peso_final = peso_final.toFixed(2);
       alert("tu peso en mercurio es igual a " + peso_final);
      }

      function peso_2(){
        const g_venus = 8.87;
        const g_tierra = 9.8;
        let peso_final = c.value * g_venus / g_tierra;
        peso_final = peso_final.toFixed(2);
        alert("tu peso en venus es " + peso_final);
      }

      function peso_3() {
       const g_marte = 3.8;
       const g_tierra = 9.8;
       let peso_final = e.value * g_marte / g_tierra;
       peso_final = peso_final.toFixed(2);
       alert("tu peso en marte es " + peso_final);    
      }
     
      function peso_4() {
      const g_jupiter = 24.7;
       const g_tierra = 9.8;
       let peso_final = g.value * g_jupiter / g_tierra;
       peso_final = peso_final.toFixed(2);
       alert("tu peso en jupiter es " + peso_final); 
      }

      function peso_5() {
         const g_saturno = 10.44;
         const g_tierra = 9.8;
         let peso_final = i.value * g_saturno / g_tierra;
         peso_final = peso_final.toFixed(2);
         alert("tu peso en saturno es " + peso_final); 
        }

        function peso_6 (){

          const g_urano = 8.88;
          const g_tierra = 9.8;
          let peso_final = k.value * g_urano / g_tierra;
          peso_final = peso_final.toFixed(2);
          alert("tu peso en urano es " + peso_final);
        }
          



      