import React, { useState } from 'react'

const UseStateObject = () => {
    let [p1,p2] = useState({
        myName: "Bholu", myAge:22, degree: "MCS"
    })

    function changeObject(){
        p2({...p1,myName: "Chanchal"})
    }
  return (
    <div>
      <h1>Name: {p1.myName} & Age: 27 Degree: MSC</h1>
      <button onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObject
