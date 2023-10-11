import '../styles/LandingPage.css'
import Header from '../components/Header'
import CourseItem from '../components/CourseItem'
function LandingPage() {
  return (

    <>
      <Header />
      <section className="mainSection">
        <aside className='addCourseSection'>
          <div className='addCourseContainer'>
            <input className="addCourseTextField" type="text" placeholder="Nombre materia" />
            <input className="addCourseButton" type="button" value="Añadir materia" /> 
          </div>
          <CourseItem/>
        </aside>
        <aside className='scheduleGenerated'>
        </aside>
      </section>
    </>
  )
}

export default LandingPage
