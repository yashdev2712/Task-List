import React, { useState } from 'react'
import AddNotes from '../components/AddNotes'
import '../src/index.css'
import classes from "../src/style.module.css"
import NoteList from '../components/NoteList'

function App() {

  const [currentNote, setCurrentNote] = useState("")
  const [notesList, setNotesList] = useState([])
  const [currentEditNote, setCurrentEditNote] = useState(null)

  return (

    <div className={classes.App}>

      <AddNotes currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        notesList={notesList}
        setNotesList={setNotesList}
        currentEditNote={currentEditNote}
        setCurrentEditNote={setCurrentEditNote} />

      <NoteList notesList={notesList}
        setCurrentEditNote={setCurrentEditNote}
        setCurrentNote={setCurrentNote}
        setNotesList={setNotesList} />

    </div>
  )
}

export default App