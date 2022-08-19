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
  }

  const DeleteNote = (id) => {
    setNoteList((prevValues)=>{ 
      return prevValues.filter((item,index)=>{
        return index!==id
      })
    })
  }

  return (
    <Box bgcolor="#FFFF93">
    <NavBar/>
    <Content onAdd = {addNote} />
    {
    noteList.map((noteItem,index) => {
      return <Note key={index} title={noteItem.title} content={noteItem.content}
      onDelete = {DeleteNote} id={index} />
    })
    }
    </Box>
  );
}

export default App;
