//EJERCICIO 05
try{
    let x = null;
    x.nombre;
}
catch(error){
    if(error instanceof TypeError){
        console.log("Tipo de error: " + error.name + " | Mensaje: " + error.message);
    } else {
        console.log("Ocurrió otro tipo de error: " + error.name + " | Mensaje: " + error.message);
    }
}