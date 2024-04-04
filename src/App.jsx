import React from 'react'
import Bholu from './Bholu'
import User from './Myarr'
console.log(User);
const App = () => {
  return (
    <>
{User.map((val)=>{
  return(
    <Bholu name={val.name} />
  )
})}    
    </>
  )
} 

export default App
