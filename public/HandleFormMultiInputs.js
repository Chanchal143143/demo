// import React, { useState } from 'react'

// const App = () => {
//   const [details, setDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
//     address: ""
//   })

//   const handleChange = (e) => {
//     // let [name, value] = e.target
//      let name = e.target.name
//      let value = e.target.value
//      setDetails((val)=>{
//       return {...val, [name]: value}
//      })
//   }
//   function handleSubmit(e){
//     e.preventDefault()
//   console.log(details);
//   // document.querySelector("h1").innerText = details.name
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h3>Name :</h3> <input type="text" onChange={handleChange} name='name' />
//         <h3>Email :</h3> <input type="text" onChange={handleChange} name='email' />
//         <h3>Password :</h3> <input type="text" onChange={handleChange} name='password' />
//         <h3>Address :</h3> <input type="text" onChange={handleChange} name='address' /> <br /> <br /> <br />
//         <h1>{details.name}</h1>
//         <button type='submit'>Submit Form</button>
//       </form>
//     </>
//   )
// }

// export default App
