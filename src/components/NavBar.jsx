import { AppBar, styled, Toolbar, Typography } from "@mui/material"

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "orange"
    
}) 

export const NavBar = () => {
    return(
    <AppBar position="sticky">
        <StyledToolbar>
        <Typography variant="h6" >
                    keeper
        </Typography>
        </StyledToolbar>
    </AppBar>
    )
}