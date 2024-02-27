import React from 'react'
import classes from "../src/style.module.css"

function NoteList({ notesList, setCurrentEditNote, setCurrentNote, setNotesList }) {

    function handelEdit(getCurrentItem) {
        setCurrentEditNote(getCurrentItem)
        setCurrentNote(getCurrentItem.label)
    }

    function handelDelete(getCurrentId) {
        setNotesList(notesList.filter(item => item.id !== getCurrentId))
    }

    return (
        <>
            <ul className={classes.noteList}>
                {
                    notesList && notesList.length > 0 ?
                        notesList.map(noteItem => <li key={noteItem.id}>
                            <label>{noteItem.label}</label>
                            <div>
                                <button onClick={() => handelEdit(noteItem)}>Edit</button>
                                <button onClick={() => handelDelete(noteItem.id)}>Delete</button>
                            </div>
                        </li>) : <div className={classes.noNotes}>No notes Add</div>
                }
            </ul>
        </>
    )

}
export default NoteList