//EJERCICIO 10
function procesarLista(numeros, callback) {
    let contador = 0;

    numeros.forEach(function(numero){
        let tiempo = Math.floor(Math.random()*(1500-500+1)+500);
        setTimeout(function() {
            console.log("Procesando " + numero + "...");
            contador++;
            if(contador === numeros.length) {
                callback("Proceso completado");
            }
        }, tiempo);
    });
}

procesarLista([1, 2, 3, 4, 5], function(mensaje) {
    console.log(mensaje);
});