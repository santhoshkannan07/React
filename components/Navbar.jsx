import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>My App</Typography> &nbsp;
                <Button varient ="standard-basic" color="error">Home</Button> &nbsp;
                <Button varient ="standard-basic" color="warning">About</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar