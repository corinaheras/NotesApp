import HeaderComponent from "../components/HeaderComponent"


function NotesPage() {
    
    const {notes} = useContext(NoteContext);
    return (
       <>
        <HeaderComponent></HeaderComponent>
        <div>Notes Page</div>
        </>
    )
}

export default NotesPage 
