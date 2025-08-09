import { createContext, useState } from "react";

const NoteContext = createContext()

function NoteProviderWrapper(props) {

    const noteList = [
    {  
      id: 1,
      title : "Ir a casa de un amigo",
      marked: false
    }, 
     {  
      id: 2,
      title: "Comer la comida",
      marked: false
    }, 
     {  
      id: 3,
      title: "recordar comprar",
      marked: false
    },
     {  
      id: 4,
      title: "Pelicula: Dune",
      marked: false
    },
    ]
    const [notes, setNotes] = useState(noteList)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export { NoteContext, NoteProviderWrapper }