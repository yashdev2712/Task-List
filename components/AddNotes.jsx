import React from 'react'
import classes from "../src/style.module.css"
import NoteList from './NoteList';

function AddNotes({ currentNote, setCurrentNote, notesList, setNotesList, currentEditNote, setCurrentEditNote }) {

  function handelNotesOnSubmit(event) {
    event.preventDefault();

    if (!!currentEditNote) {
      const findCurrentEditNote = notesList.findIndex(item => item.id === currentEditNote.id)

      notesList[findCurrentEditNote] = {
        ...notesList[findCurrentEditNote],
        label: currentNote,

      }
    } else {

      notesList.push({
        id: notesList.length + 1,
        label: currentNote
      })
    }

    setNotesList(notesList)
    setCurrentNote("")
    setCurrentEditNote(null)
  }
  return (
    <>

      <form className={classes.form}>

        <input type="text"
          name='current-note'
          id='current-note'
          placeholder='Enter Note here'
          className={classes.input}
          value={currentNote || ""}
          onChange={(event) => setCurrentNote(event.target.value)} />

        <button type='submit' className={classes.button} onClick={handelNotesOnSubmit}>

          {
            !!currentEditNote ? " Edit Note " : "Add Note "
          }

        </button>

      </form>
    </>
  )
}

export default AddNotes