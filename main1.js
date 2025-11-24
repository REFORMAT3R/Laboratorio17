//EJERCICIO 01
try{
    let resultado = variableInexistente + 5;
}
catch(error){
    document.getElementById("mensaje1").textContent = "Error: " + error.message;
}

