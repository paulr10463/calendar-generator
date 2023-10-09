import '../styles/CalendarToSelect.css';
import { useState } from 'react';

function CalendarToSelect() {
  // Declaración del estado inicial de la matriz bidimensional
  const [matriz, setMatriz] = useState([
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ]);

  // Ejemplo de cómo actualizar un valor en la matriz bidimensional
  const actualizarValor = (fila, columna) => {
    const nuevaMatriz = matriz.map((filaActual, index) => {
      if (index === fila) {
        return filaActual.map((valor, colIndex) =>
          colIndex === columna ? !valor : valor
        );
      }
      return filaActual;
    });
    setMatriz(nuevaMatriz);
  };

  /*const mostrarMatrizEnConsola = () => {
    console.log(matriz);
  };*/

  return (
    <div>   
      <table className="calendarTable">
        <tbody>
          <tr className='titlesRow'>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sábado</th>
          </tr>
          {matriz.map((fila, filaIndex) => (
            <tr key={filaIndex}>
              <td className='hourCells'>
                <input 
                  type="text" 
                  value={`${filaIndex + 8}:00 - ${filaIndex + 9}:00`}
                  disabled
                />
              </td>
              {fila.map((valor, columnaIndex) => (
                <td key={columnaIndex}>
                  <input
                    type="button"
                    className={valor ? "calendarButton-selected" : "calendarButton"}
                    onClick={() => actualizarValor(filaIndex, columnaIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalendarToSelect;
