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
  const [finalSchedules, setFinalSchedules] = useState([]);

  const emptySchedule = [ 
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],];

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

  function generateSchedule(subjectsList, indice = 0, resultadoParcial = [], horarioParcial= emptySchedule, resultadosFinales = []) {
        if (indice === subjectsList.length) {
            // Si hemos alcanzado el final de la lista de iteradores,
            // hemos terminado de iterar y agregamos el resultado parcial
            // a los resultados finales.
            resultadosFinales.push(horarioParcial);
        } else {
            // Iteramos sobre el iterador actual
            for (let group of subjectsList[indice].groups) {
                const newHorarioParcial = JSON.parse(JSON.stringify(horarioParcial));
                for (let i = 0; i < group.scheduleMatrix.length; i++) {
                  for (let j = 0; j < group.scheduleMatrix[i].length; j++) {
                    if (horarioParcial[i][j] === "" && group.scheduleMatrix[i][j] === true) {
                      newHorarioParcial[i][j] = group.subjectName + " " + group.groupName;
                    } else if (horarioParcial[i][j] !== "" && group.scheduleMatrix[i][j] === true) {
                      newHorarioParcial[i][j] = "Crash";
                    }
                  }
                }
                const newResultadoParcial = [...resultadoParcial, group.subjectName + " " + group.groupName];
                generateSchedule(subjects, indice + 1, newResultadoParcial, newHorarioParcial, resultadosFinales);
            }
        }
        return resultadosFinales;
    }

  const onHandleGenerateSchedule = () => {  
    const resultado = generateSchedule(subjects);
    const resultadosSinCrash = resultado.filter((horario) => {
      return !horario.flat().includes("Crash");
    });
    console.log(resultadosSinCrash);
    setFinalSchedules(resultadosSinCrash);
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
            <button className="addCourseButton" style={{marginBottom: "1rem"}} onClick={onHandleGenerateSchedule}>
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
            {finalSchedules.map((schedule, index) => {
              return <CalendarToSee key={index} matrix={schedule} />
            }
            )}
          
        </aside>
      </section>
    </>
  )
}

export default LandingPage
