// import React, { useState } from 'react'

// const BasicForm = () => {
//     let [email, setEmail] = useState("")
//     let [password, setPassword] = useState("")
//     let [new1, setNew1] = useState([])
//     function submitF(e){
//         e.preventDefault()
//         let nwEntry = {email: email, password: password}
//         setNew1([...new1, nwEntry])
//         console.log(nwEntry);
//     }
//   return (
//     <>
//       <form action="" onSubmit={submitF}>
//        <div>
//        <label htmlFor="email">email</label>
//        <input type="text" name="email" id="email" autoComplete='off' value={email} 
//           onChange={(e)=>{
//             setEmail(e.target.value)
//           }}
//        />
//        </div>
//        <div>
//        <label htmlFor="password">password</label>
//        <input type="password" name="password" id="password" value={password}
//          onChange={(e)=>{
//             setPassword(e.target.value)
//          }}
//        />
//        </div>
//         <button type="submit">login</button>
//        </form>
//       <div>
//         {new1.map((val)=>{
//             return(
//                 <>
//                 <span>Email 📧 : {val.email} </span> <br />
//                 <span>Password 🧭 : {val.password}</span> <br />
//                 </>
//             )
//         })}
//       </div>
//     </>
//   )
// }

// export default BasicForm
