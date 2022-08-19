import { Delete } from "@mui/icons-material"
import { Box, Card, Typography, CardContent, CardActions, IconButton } from "@mui/material"

export const Note = (props) => {
    return(
        <Box display="inline-block" mt={1} ml={1} mr={5} mb={1} p={1} width="40%">
        <Card>
            <CardContent>
                <Typography variant="h5">Title</Typography>
                <Typography variant="h6">Content</Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <Delete></Delete>
                </IconButton>
            </CardActions>
        </Card>
        </Box>
    )
}