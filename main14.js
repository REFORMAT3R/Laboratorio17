//EJERCICIO 14
function procesarListaPromesa(numeros) {
    let promesas = numeros.map(function(numero) {
        return new Promise(function(resolve) {
            let tiempo = Math.floor(Math.random() * (1500 - 500 + 1) + 500);

            setTimeout(function() {
                console.log("Procesando " + numero + "...");
                resolve();
            }, tiempo);
        });
    });

    return Promise.all(promesas).then(function() {
        return "Proceso completado";
    });
}

procesarListaPromesa([1, 2, 3, 4, 5])
    .then(function(mensaje) {
        console.log(mensaje);
    })
    .catch(function(error) {
        console.log("Error:", error.message);
    });