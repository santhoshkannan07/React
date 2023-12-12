import React, { useState } from 'react'

const Mapping = () => {
    var[names,SetNames] = useState(["Santhosh", "Kannan", "Akash", "Saran"])
  return (

    <div>
        <ul>
            {names.map((value,index)=>{
                return(
                    <li>{value}</li>
            )
            })}
        </ul>

    </div>
  )
}

export default Mapping