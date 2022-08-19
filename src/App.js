import {Box} from '@mui/material'
import { useState } from 'react';
import { Content } from './components/Content';
import { NavBar } from './components/NavBar';



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
    </Box>
  );
}

export default App;
