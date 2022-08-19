import {Box} from '@mui/material'
import { useState } from 'react';
import { Content } from './components/Content';
import { NavBar } from './components/NavBar';
import { Note } from './components/Note';



function App() {

  const [noteList,setNoteList] = useState([])

  const addNote = (newNote) => {
  console.log(newNote)
  setNoteList((prevValues)=>{
    return [...prevValues, newNote]
  })
  console.log(noteList)
  }

  return (
    <Box>
    <NavBar/>
    <Content onAdd = {addNote} />
    <Note title="Note Title" content="Note Content here" />
    <Note title="Note Title" content="Note Content here" />
    <Note title="Note Title" content="Note Content here" />
    </Box>
  );
}

export default App;
