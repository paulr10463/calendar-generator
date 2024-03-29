import './CalendarToSelect.css';
import { useState } from 'react';

function CalendarToSelect(onScheduleChange) {
  // Declaración del estado inicial de la matrix bidimensional
  const [matrix, setmatrix] = useState([
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
    [false, false, false, false, false, false],
  ]);

  // Ejemplo de cómo actualizar un valor en la matrix bidimensional
  const actualizarValor = (fila, columna) => {
    const nuevamatrix = matrix.map((filaActual, index) => {
      if (index === fila) {
        return filaActual.map((valor, colIndex) =>
          colIndex === columna ? !valor : valor
        );
      }
      return filaActual;
    });
    setmatrix(nuevamatrix);
    onScheduleChange(nuevamatrix)
  };

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
          {matrix.map((fila, filaIndex) => (
            <tr key={filaIndex}>
              <td className='hourCells'>
                <input 
                  type="text" 
                  value={`${filaIndex + 7}:00 - ${filaIndex + 8}:00`}
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
