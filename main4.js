//EJERCICIO 04
function validarEdad (edad) {
    if(edad < 0 || isNaN(edad)) {
        throw new Error("Edad inválida");
    }
    return "Edad Valida";
}
try{
    validarEdad(-5);
}
catch(error){
    console.log("Error: " + error.message);
}