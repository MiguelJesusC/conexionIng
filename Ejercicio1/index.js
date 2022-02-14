
/**
 * Funcion para poder calcular si el numero ingresa es potencia de 2.
 * @param {Number} num 
 * @returns {Boolean} 
 */

function obtenerPotencia(num) {
    if (num < 1) {
        return false
    } else if (num <= 2) {
        for (let i = 2; i < num / 2; i++) {
            if (num % x == 0) { return false }
        }
    } else {
        console.log(`El numero ingresado ${num} no es correcto`);
        return false;
    }
    return true;
}