import './CalendarToSee.css';
import { useState } from 'react';


function CalendarToSee({matrix}) {
  console.log(matrix);
  return (
    <div className="calendarToSee">
      <table className="calendarTable">
        <tbody>
          <tr className="titlesRow">
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
              {fila.map((columna, colIndex) => (
                <td key={colIndex} >
                  <input
                  className= {columna === ""?'calendarCell':'calendarCell-selected'}
                    type="text"
                    value={columna}
                    disabled
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

export default CalendarToSee;
