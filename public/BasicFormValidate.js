
// import React, { useState } from 'react'

// const App = () => {
//   let [email, setEmail] = useState()
//   let [password, setPasswoed] = useState()
//   let [a1, a2] = useState([])
//   function pop(){
//     if(email && password){
//       let p1 = {email,password}
//       a2([...a1, p1])
//       setEmail("")
//       setPasswoed("")
//      }
//      else{
//       alert("plz fill the date")
//      }
//   }
//   return (
//     <div>
//        email: <input type="text" value={email} onChange={(e)=>{
//           setEmail(e.target.value)
//        }} />  <br />
//        password: <input type="text" value={password} onChange={(e)=>{
//           setPasswoed(e.target.value)
//        }} />  <br />
//        <button onClick={pop}>submit</button>
//        {a1.map((val)=>{
//         let {email,password} = val
//         return(
//           <>
//           <p>Email : {email}</p>
//           <p>Password : {password}</p>
//           </>
//         )
//        })}
//     </div>
//   )
// }

// export default App