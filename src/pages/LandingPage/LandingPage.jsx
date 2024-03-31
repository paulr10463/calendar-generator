import './LandingPage.css'
import Header from '../../components/HeaderComponent/Header'
import { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Subject from '../../classes/Models/Subject'
import { useAllSubjectsContext } from '../../contexts/AllSubjectsContext'
import SubjectItem from '../../components/SubjectItemComponent/SubjectItem'
import CalendarToSee from '../../components/CalendarToSeeComponent/CalendarToSee'

function LandingPage() {
  const { subjects, setSubjects } = useAllSubjectsContext();

  const AddSubject = () => {
    const subjectName = document.getElementById('SubjetNameText').value;
    if (subjectName === '') {
      alert('No se puede añadir una materia sin nombre');
      return;
    }
    const newSubject = new Subject(subjectName);
    setSubjects([...subjects, newSubject]);
    document.getElementById('SubjetNameText').value = '';
  }

  const handleGenerateSchedule = () => {
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
  
  }

  return (
    <>
      <Header />
      <section className="mainSection">
        <aside className='addCourseSection'>
          <form className='addCourseContainer__1' onSubmit={(e) => e.preventDefault()}>
            <label className="addCourseText" htmlFor="nombre materia">Nombre materia</label>
            <div className='addCourseContainer__1__1'>
              <input className="addCourseTextField" id='SubjetNameText' type="text" placeholder="Auditoría, Usabilidad" />
              <button className="addCourseButton" type='submit' onClick={AddSubject}>
                <FontAwesomeIcon className="ButtonIcon" icon={faPlus} style={{ color: "#ffffff", }} />
              </button>
            </div>
          </form>
          <div style={{display:"flex", width:"100%", justifyContent:"center", gap:"1rem"}}>
            <button className="addCourseButton" style={{marginBottom: "1rem"}} onClick={() => { console.log(subjects) }}>
              Imprime Materias
            </button>
            <button className="addCourseButton" style={{marginBottom: "1rem"}} onClick={handleGenerateSchedule}>
              Generar Horario
            </button>
          </div>
          <div className='courseList'>
            {subjects.map((subject, index) => {
              return <SubjectItem key={index} subjectIndex={index} />
            })}
          </div>

        </aside>
        <aside className='scheduleGenerated'>
          <CalendarToSee />
        </aside>
      </section>
    </>
  )
}

export default LandingPage
