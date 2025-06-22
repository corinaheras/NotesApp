import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage'
import NotesPage from './pages/NotesPage'

function App() {
  
  return (  
    <Routes >
         <Route path="/" element={<HomePage/>}/>
         <Route path="/notes" element={<NotesPage/>}/>
    </Routes>
  
  )
}

export default App
