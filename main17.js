//EJERCICIO 17
function dividirAsync(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (b === 0) {
                reject(new Error("No puede dividir entre 0"));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}
async function probarDivision(a, b) {
    try {
        let resultado = await dividirAsync(a, b);
        console.log("Resultado", resultado);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

probarDivision(10, 2);
probarDivision(10, 0);