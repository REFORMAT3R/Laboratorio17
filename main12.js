//EJERCICIO 12
function cargarUsuario() {
    return new Promise(function(resolve, reject) {
        let tiempo = Math.floor(Math.random() * (1500 - 800 + 1) + 800);

        setTimeout(function() {
            let usuario = {
                id: 1,
                nombre: "Jotar"
            };

            resolve(usuario);
        }, tiempo);
    });
}

cargarUsuario()
    .then(function(usuario) {
        console.log("Usuario cargado: " + usuario.nombre + " (ID: " + usuario.id + ")");
    })
    .catch(function(error) {
        console.log("Ocurrió un error:", error);
    });