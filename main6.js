//EJERCICIO 06
function funcionA() {
    try {
        throw new Error("Algo falló");
    } catch (error) {
        console.log("Nivel 1: error capturado en funcionA");
        throw error;   // volver a lanzar el error
    }
}

function funcionB() {
    try {
        funcionA();
    } catch (error) {
        console.log("Nivel 2: error capturado en funcionB");
        throw error;   // volver a lanzarlo a un nivel superior
    }
}

try {
    funcionB();
} catch (error) {
    console.log("Nivel 3: error capturado fuera de todas las funciones");
}
