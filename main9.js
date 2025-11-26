//EJERCICIO 09
function dividirAsync(a, b, callback) {
    setTimeout(function() {
        if(b === 0){
            callback(new Error("No puede dividir entre 0"), null);
        } else {
            callback(null, a/b)
        }
    }, 1500);
}
dividirAsync(10, 2, function(error, resultado) {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("Resultado:", resultado);
    }
});
dividirAsync(10, 0, function(error, resultado) {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("Resultado:", resultado);
    }
});