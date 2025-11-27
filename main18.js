//EJERCICIO 18
function procesarLista(numero) {
    return new Promise(function(resolve) {
        let tiempo = Math.floor(Math.random() * (1500 - 500 + 1) + 500);

        setTimeout(function() {
            console.log("Procesando " + numero + "...");
            resolve();
        }, tiempo);
    });
}
async function procesarListaAsync(numeros) {
    try {
        let promesas = numeros.map(numero => procesarLista(numero));
        await Promise.all(promesas);
        console.log("Proceso completado");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

procesarListaAsync([1, 2, 3, 4, 5]);