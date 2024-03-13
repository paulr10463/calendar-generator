import LandingPage from './pages/LandingPage/LandingPage'
import { AllSubjectsContextProvider } from './contexts/AllSubjectsContext'

function App() {

  return (
    <AllSubjectsContextProvider>
      <LandingPage />
    </AllSubjectsContextProvider>
  )
}

export default App
