//EJERCICIO 02
try{
    let texto = "{nombre: 'Juan'}";
    JSON.parse(texto);
}
catch(error){
    document.getElementById("mensaje2").textContent =
        "Tipo de error: " + error.name + " | Mensaje: " + error.message;
}
