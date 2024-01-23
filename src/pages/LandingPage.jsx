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
            <input className="addCourseTextField" id='SubjetNameText' type="text" placeholder="Nombre materia" />
            <input onClick={AddSubject} className="addCourseButton" type="button" value="Añadir materia" /> 
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
