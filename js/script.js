let nombre 
let apellido
let celular
let numero = 1


nombre = prompt ("ingrese nombre")
if (nombre == ""){
    alert("no ingresaste ningun dato")
    nombre = prompt ("ingrese nombre") 
    
}else{
    alert("nombre ingresado:" + " " + nombre)
}


apellido = prompt ("ingrese apellido")
if (nombre == ""){
    alert("no ingresaste ningun dato")
    apellido = prompt ("ingrese apellido") 
    
}else{
    alert("apellido ingresado:" + " " + apellido)
}





celular = Number ( prompt ("ingrese numero de celular "))
if (celular == ""){
    alert("no ingresaste ningun dato")
    celular = Number (prompt ("ingrese numero de celular")) 
    
}else{
    alert("celular ingresado:" + " " + celular)
}

for (let numero = 1; numero <= 100; numero++){
    alert(nombre + " " + apellido + " " + "tu numero es:" + " " + numero )
    break
}

function texto (saludos) {
    let suerte = "gracias por participar, suerte!"

   alert( saludos + " " + nombre + " " + " " + suerte )
}
    texto ("hola")

    console.log(nombre + " " + apellido + " " + "tu numero es:" + " " + numero )

    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido= apellido 
        this.saludo = function(){ console.log("Bienvenidos")}
    }
    const persona1 = new Persona(nombre, apellido);
    
    persona1.saludo();








