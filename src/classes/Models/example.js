function buclesRecursivos(iteradores, indice = 0, resultadoParcial = [], resultadosFinales = []) {
    if (indice === iteradores.length) {
        // Si hemos alcanzado el final de la lista de iteradores,
        // hemos terminado de iterar y agregamos el resultado parcial
        // a los resultados finales.
        resultadosFinales.push(resultadoParcial);
    } else {
        // Iteramos sobre el iterador actual
        for (let elemento of iteradores[indice]) {
            // Creamos una nueva lista que contiene los resultados
            // acumulados hasta este punto más el elemento actual.
            let nuevoResultado = [...resultadoParcial, elemento];
            // Llamamos recursivamente a la función para procesar
            // los siguientes iteradores.
            buclesRecursivos(iteradores, indice + 1, nuevoResultado, resultadosFinales);
        }
    }
    return resultadosFinales;
}

// Ejemplo de uso
const iteradores = [[1, 2], [3, 4, 5], [6, 7]];
const resultado = buclesRecursivos(iteradores);
console.log(resultado);
