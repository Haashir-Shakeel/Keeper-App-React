import { Delete } from "@mui/icons-material"
import { Box, Card, Typography, CardContent, CardActions, IconButton, Fab } from "@mui/material"

export const Note = (props) => {
    return(
        <Box display="inline-block" mt={1} ml={1} mr={1} mb={1} p={1} width="30%">
        <Card>
            <CardContent>
                <Typography variant="h4" fontWeight="bold">{props.title}</Typography>
                <Typography variant="span">{props.content}</Typography>
            </CardContent>
            <CardActions>
                <Fab style={{backgroundColor: 'orange', color: "white" }} onClick={()=>{
                    props.onDelete(props.id)
                    }}>
                    <Delete/>
                </Fab>
            </CardActions>
        </Card>
        </Box>
    )
}