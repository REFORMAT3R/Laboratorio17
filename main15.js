//EJERCICIO 15
function cargarMensaje() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Mensaje cargado");
        }, 1000);
    });
}

async function mostrarMensaje() {
    try {
        let mensaje = await cargarMensaje(); 
        console.log(mensaje); 
    } catch (error) {
        console.log("Ocurrió un error:", error);
    }
}

mostrarMensaje();