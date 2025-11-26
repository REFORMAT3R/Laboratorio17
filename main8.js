//EJERCICIO 08
function cargarUsuario(callback){
    let tiempo = Math.floor(Math.random()*(1500-800+1)+800);
    setTimeout(function() {
        let usuario = {
            id: 1,
            nombre: "Jotar"
        };
        callback(usuario);
    }, tiempo);
}

cargarUsuario(function(usuario) {
    console.log("Usuario cargado: " + usuario.nombre + " (ID: " + usuario.id + ")");
});