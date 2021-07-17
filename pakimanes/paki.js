var d = document.getElementById("parrafon");



class pakiman {

    constructor(nombre,tipo,vida,fuerza){
        
        this.imagen = new Image();
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.fuerza = fuerza;
      
        this.imagen.src = imagenes[this.nombre];

         }


    mostrar(){
        

        var h = document.body.appendChild( this.imagen );
        d.innerHTML += "<strong>" + "<br/>"+ "nombre es: " + this.nombre + "<br/>" + "</strong>";
        d.innerHTML += "la vida es: " + this.vida + "<br/>";
        d.innerHTML += "el tipo es: " + this.tipo + "<br/>";
        d.innerHTML += "la fuerza es: " + this.fuerza + "<br/>" + "<hr/>" ;
     

    
    
}


}

