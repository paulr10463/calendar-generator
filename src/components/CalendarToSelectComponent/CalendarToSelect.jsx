import './CalendarToSelect.css';
import { useEffect, useState } from 'react';
import { useGroupContext } from '../../contexts/GroupContext';
import { useAllSubjectsContext } from '../../contexts/AllSubjectsContext';

function CalendarToSelect(onScheduleChange) {
  // Declaración del estado inicial de la matrix bidimensional
  const { subjects, setSubjects } = useAllSubjectsContext();
  const { subjectIndexC, groupIndexC } = useGroupContext();
  
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
    console.log(fila, columna);
    console.log("Subject index: ", subjectIndexC);
    console.log("Group index: ", groupIndexC);

    const nuevamatrix = matrix.map((filaActual, index) => {
      if (index === fila) {
        return filaActual.map((valor, colIndex) =>
          colIndex === columna ? !valor : valor
        );
      }
      return filaActual;
    });
    setmatrix(nuevamatrix);
  };

  useEffect(() => { 
    const newSubjects = [...subjects];
    // Actualizar la matriz de horarios en la copia del array
    if (newSubjects[subjectIndexC] && newSubjects[subjectIndexC].groups[groupIndexC]) {
      newSubjects[subjectIndexC].groups[groupIndexC].scheduleMatrix = matrix;
    }
    setSubjects(newSubjects);
  }
  , [matrix]);

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
