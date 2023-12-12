import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var name="Santhosh"
    var [fname,setFname] = useState("Santhosh")
    var [val,setVal] = useState()

const changeName = ()=>{
        console.log("Clicked")
        setFname(val)
        setval("")
    }
const inputHandler =(e)=>{
console.log(e.target.value)
setVal(e.target.value)
}

  return (
    <div><br/><br/>
        <Typography>My Name Is {fname}</Typography>
        <TextField variant='outlined' label="Enter Name" onChange={inputHandler} value={val}/><br/><br/>
        <Button varient ="contained" onClick={changeName} >Changed</Button>
    </div>
  )
}

export default StateBasics