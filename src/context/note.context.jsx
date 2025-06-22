import { createContext, useState } from "react"

const NoteContext = createContext()

function NoteProviderWrapper(props) {
    const noteList = [{
        id: 1, 
        title: "Realizar las actividades",
        marked: false
        
    },
    {
        id: 1, 
        title: "Realizar las actividades",
        marked: false
        
    },
    {
        id: 1, 
        title: "Realizar las actividades",
        marked: false
        
    }]
    const [notes, setNotes] = useState([noteList])
    return (
        <NoteContext.Provider value={{notes, setNotes}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export {NoteContext, NoteProviderWrapper}