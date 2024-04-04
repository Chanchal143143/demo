// import React, { useState } from 'react'

// const MultipleInpute = () => {
//     const [set, set1] = useState({
//         Fullname: "",
//         Email: "",
//         Phone: "",
//         Password: ""
//     })
//     let [record, setRecord] = useState([])
//     const handleInput = (e) => {
//          let name = e.target.name
//          let value = e.target.value
//          set1({...set, [name] : value})
//     }

//     let pop = (e) => {
//         e.preventDefault()
//         let new1 = {...set, id: new Date().getTime().toString()}
//         setRecord([...record, new1])
//         console.log(record);
//     }
//   return (
//     <>
//     <form action="" onSubmit={pop}>
//         <div>
//             <label htmlFor="Fullname">Fullname</label>
//             <input type="text" value={set1.Fullname} onChange={handleInput} name='Fullname' id='Fullname' />
//         </div>

//         <div>
//             <label htmlFor="Email">Email</label>
//             <input type="text" value={set1.Email} onChange={handleInput} name='Email' id='Email' />
//         </div>

//         <div>
//             <label htmlFor="Phone">Phone</label>
//             <input type="text" value={set1.Phone} onChange={handleInput} name='Phone' id='Phone' />
//         </div>

//         <div>
//             <label htmlFor="Password">Password</label>
//             <input type="text" value={set1.Password} onChange={handleInput} name='Password' id='Password' />
//         </div>
//         <button type="submit">Registration</button>
//         <div>
//             {record.map((val)=>{
//                 return(
//                     <>
//                     <div key={val.id}>
//                     <p>{val.Fullname}</p>
//                     <p>{val.Email}</p>
//                     <p>{val.Phone}</p>
//                     <p>{val.Password}</p>
//                     </div>
//                     </>
//                 )
//             })}
//         </div>
//     </form>
//     </>
//   )
// }

// export default MultipleInpute
