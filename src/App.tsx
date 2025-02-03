import './App.css'
import './components/Header.tsx'
import ResponsiveAppBar from './components/Header.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FrontPage from './components/FrontPage'
import SavedPage from './components/SavedPage'
import {useJokes} from './hooks/useJokes'

const App: React.FC = () => {

  const jokesHook = useJokes()

  return (
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
        <Routes>
          <Route path="/" element={<FrontPage saveJoke={jokesHook.saveJoke} />} />
          <Route path="/saved" element={<SavedPage savedJokes={jokesHook.savedJokes} deleteJoke={jokesHook.deleteJoke} />} />
      </Routes>
        </Routes> 
      </BrowserRouter>
  )
}

export default App
