// import React, { useEffect, useState } from 'react'
// import "./index.css"
// import Loading from './Loading'
// const API = "https://jsonplaceholder.typicode.com/users"
// const App = () => {
//   const [user,setUser] = useState([])
//   const [loading, setLoading] = useState(true)
//    async function fetchUser(url){
//     try {
//       setLoading(false)
//         const res = await fetch(url)
//         const data = await res.json()
//         if(data.length > 0){
//             setUser(data)
//         }
//     } catch (e) {
//         console.error(e);
//     }
//     }
//     useEffect(()=>{
//         fetchUser(API)
//     },[])

//     if(loading){
//       return <Loading />
//     }
//   return (
//     <>
//       <table>
//         <thead>
//             <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Address</th>
//             </tr>
//         </thead>
//         <tbody>
//             {user.map((val)=>{
//                 const {id,name,email} = val
//                 const {street,city,zipcode} = val.address
//                 return(
//                     <tr>
//                         <td>{id}</td>
//                         <td>{name}</td>
//                         <td>{email}</td>
//                         <td> {street}, {city}, {zipcode} </td>
//                     </tr>
//                 )
//             })}
//         </tbody>
//       </table>
//     </>
//   )
// }


// export default App
