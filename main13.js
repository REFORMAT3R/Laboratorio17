//EJERCICIO 13
function dividirAsync(a, b){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(b === 0) {
                reject(new Error("No puede dividir entre 0"));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}

dividirAsync(10, 2)
    .then(function(resultado) {
        console.log("Resultado", resultado);
    })
    .catch(function(error) {
        console.log("Error:", error.message);
    });
dividirAsync(10, 0)
    .then(function(resultado) {
        console.log("Resultado", resultado);
    })
    .catch(function(error) {
        console.log("Error:", error.message);
    });