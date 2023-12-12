import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Typography>Hello Moto</Typography>
        <TextField variant="outlined" label="Username" />
        <Button>Go</Button>
        <Button variant="text">Submit</Button>
    </div>
  )
}

export default Login