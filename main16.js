//EJERCICIO 16
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

async function mostrarUsuario() {
    try {
        let usuario = await cargarUsuario(); 
        console.log("Usuario cargado: " + usuario.nombre + " (ID: " + usuario.id + ")");
    } catch (error) {
        console.log("Ocurrió un error:", error);
    }
}

mostrarUsuario();