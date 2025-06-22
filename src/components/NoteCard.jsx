function NoteCard({ note }) {
    return (
    <article className="note-card">
        <input type="texxt " className="card-title" value={note.title}></input>
        <input type="checkbox " checked={note.marked}></input>

    </article>
    )
}

export default NoteCard;