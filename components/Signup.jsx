import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div><br/><br/>
        <Typography variant="h3">Sign Up</Typography>
        <br/>
        <TextField id="standard-basic" label="First Name" variant="standard" />
        <br/><br/>
        <TextField id="standard-basic" label="Second Name" variant="standard" />
        <br/><br/>
        <TextField id="standard-basic" label="Email ID" variant="standard" />
        <br/><br/>
        <TextField id="standard-basic" label="Gender" variant="standard" />
        <br/><br/>
        <TextField id="standard-basic" label="Phone Number" variant="standard" />
        <br/><br/>
        <TextField id="standard-basic" label="Password" variant="standard" />
        <br/><br/>
        <Button variant="contained">Proceed</Button>

    </div>
  )
}

export default Signup