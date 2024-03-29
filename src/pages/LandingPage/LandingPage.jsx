import './LandingPage.css'
import Header from '../../components/HeaderComponent/Header'
import { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Subject from '../../classes/Models/Subject'
import { useAllSubjectsContext } from '../../contexts/AllSubjectsContext'
import SubjectItem from '../../components/SubjectItemComponent/SubjectItem'

function LandingPage() {
  const { subjects, setSubjects } = useAllSubjectsContext();

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
            <form className='addCourseContainer__1' onSubmit={(e) => e.preventDefault()}>
                <label className="addCourseText" htmlFor="nombre materia">Nombre materia</label>
                <div className='addCourseContainer__1__1'>
                  <input className="addCourseTextField" id='SubjetNameText' type="text" placeholder="Auditoría, Usabilidad" />
                  <button className="addCourseButton" type='submit' onClick={AddSubject}>
                    <FontAwesomeIcon className="ButtonIcon" icon={faPlus} style={{ color: "#ffffff", }} />
                  </button>
                </div>
            </form>
            <button className="AddGroupButton" onClick={()=>{console.log(subjects)}}>
            Print subjects
          </button>
          <div className='courseList'>
            {subjects.map((subject, index) => {
              return <SubjectItem key={index} subjectIndex={index}/>
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
