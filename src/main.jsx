import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NoteProviderWrapper } from './context/note.context.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/NotesApp/">
        <NoteProviderWrapper>
                    <App />
        </NoteProviderWrapper>
    </BrowserRouter>
)
