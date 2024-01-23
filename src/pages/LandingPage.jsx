import '../styles/LandingPage.css'
import Header from '../components/Header'
import CourseItem from '../components/CourseItem'
import {useState} from 'react'
import Subject from '../classes/Subject'

function LandingPage() {
  const [subjects, setSubjects] = useState([]);

  const AddSubject = () => {
    const subjectName = document.getElementById('SubjetNameText').value;
    if(subjectName === ''){
      alert('No se puede añadir una materia sin nombre');
      return;
    }
    const newSubject = new Subject(subjectName);
    setSubjects([...subjects, newSubject]);
    document.getElementById('SubjetNameText').value = '';
    //console.log(subjects);
  }

  return (
    <>
      <Header />
      <section className="mainSection">
        <aside className='addCourseSection'>
          <div className='addCourseContainer'>  
            <form className='addCourseContainer' onSubmit={(e)=> e.preventDefault()}>
              <label className="addCourse__name"htmlFor="nombre materia">Nombre materia: </label>
              <input className="addCourseTextField" id='SubjetNameText' type="text" placeholder="Auditoría, Usabilidad" />
              <button type='submit' onClick={AddSubject} className="addCourseButton">Añadir</button>
            </form>
          </div>
          <div className='courseList'>
            {subjects.map((subject, index) => {
              return <CourseItem key={index} name={subject.name} />
            })}
          </div>

        </aside>
        <aside className='scheduleGenerated'>
        </aside>
      </section>
    </>
  )
}

export default LandingPage
