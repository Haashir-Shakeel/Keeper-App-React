import { Box, Card, CardActions, CardContent, IconButton, Input, InputBase, TextField } from "@mui/material"
import { useState } from "react"
import {Add} from "@mui/icons-material"

export const Content = () => {

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
             </CardContent>
             
             <CardActions disableSpacing>
                <IconButton >
                    <Add />
                </IconButton>
             </CardActions>

            </Card>
        </Box>
    )
}