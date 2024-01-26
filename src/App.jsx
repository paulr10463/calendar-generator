import LandingPage from './pages/LandingPage/LandingPage'
import { Provider } from 'react-redux';
import store from './classes/Store';

function App() {

  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  )
}

export default App
