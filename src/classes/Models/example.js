import Subject from './Subject.js';
import Group from './Group.js';
const group1 = new Group('group1');
const group2 = new Group('group2');
group1.scheduleMatrix = [[true, false], [false, true]];
group2.scheduleMatrix = [[false, true], [false, false]];
console.log(group1.schedulesCrash(group2.scheduleMatrix));
console.log(group1.mergeSchedules(group2.scheduleMatrix));

/*
const sub1 = new Subject('sub1', {group1: [[1, 0], [0, 1]], group2: [[0, 1], [1, 0]]});
const sub2 = new Subject('sub2', {group1: [[1, 0], [0, 1]], group2: [[0, 1], [1, 0]]});

function buclesRecursivos(iteradores, indice = 0, resultadoParcial = [], horarioParcial=[], resultadosFinales = []) {
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
*/