


function NoteCard({note}) {
    return (
        <article className="note-card">
           <input type="text" className="car-title" value={note.title}/>
           <input type="checkbox" checked={note.marked} />
        </article>
    )
}

export default NoteCard; 