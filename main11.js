//EJERCICIO 11
function cargarMensaje() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Mensaje cargado"); 
        }, 1000);
    });
}

cargarMensaje()
    .then(function(mensaje) {
        console.log(mensaje); 
    })
    .catch(function(error) {
        console.log("Ocurrió un error:", error);
    });