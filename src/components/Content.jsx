import { Box, Card, CardActions, CardContent, Fab, IconButton, Input, InputBase, TextField } from "@mui/material"
import { useState } from "react"
import {Add} from "@mui/icons-material"

export const Content = (props) => {

    const [note,setNote]  = useState({
        title:'',
        content:''
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]:value
            }
        })
    }
    
    return (
        <Box mt={5} borderRadius={2} ml={5} mr={5} mb={5} >
            <Card>
            <CardContent>
            <InputBase placeholder="Title" name="title" 
            value={note.title} onChange={handleChange} 
            ></InputBase>
            
            <TextField sx={{width:"100%"}}
                id="standard-multiline-static" multiline rows={3}
                placeholder="Take a Note" variant="standard"
                value={note.content} onChange={handleChange} name='content'
             />
             <CardActions disableSpacing>
                <Fab style={{backgroundColor: 'orange', color: "white" }} onClick={()=> {
                    props.onAdd(note)
                    setNote({
                        title:'',
                        content:''
                    })
                }}>
                    <Add/>
                </Fab>
             </CardActions>

             </CardContent>
             
             

            </Card>
        </Box>
    )
}