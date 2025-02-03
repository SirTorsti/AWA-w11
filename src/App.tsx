import './App.css'
import './components/Header.tsx'
import ResponsiveAppBar from './components/Header.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FrontPage from './components/FrontPage'
import SavedPage from './components/SavedPage'
import useJokes from './hooks/useJokes'

const App: React.FC = () => {

  const jokesHook = useJokes()

  return (
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<FrontPage {...jokesHook}/>}/>
          <Route path="/saved" element={<SavedPage {...jokesHook} />} />
        </Routes> 
      </BrowserRouter>
  )
}

export default App
