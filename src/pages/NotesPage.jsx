import HeaderComponent from "../components/HeaderComponent"
import { useContext } from "react";
import { NoteContext } from "../context/note.context";
import NoteCard from "../components/NoteCard";
import "./NotesPage.css";

function NotesPage() {

    const {notes} = useContext(NoteContext);

    const noteCards = notes.map((note) => {
        return (
            <li key={note.id}>
                <NoteCard note = {note}></NoteCard>
            </li>
        )
    })


    return (

   <>
        <HeaderComponent></HeaderComponent>
        <section id="notes-page">
          <h1>Notes</h1>
          <ul className="note-list">{noteCards}</ul>
        </section>
       
      </>
    );  
}

export default NotesPage 
