// import React, { useState } from 'react'

// const UseStateWithArray = () => {
//     let bio = [
//         {
//             id: 0, myName: "bholu", age: 26
//         },
//         {
//             id: 1, myName: "chanchal", age: 13
//         },
//     ]

//     let [p1, p2] = useState(bio)
//     console.log(bio);
//     function clearArray(){
//        p2([])
//     }

//     let Remove = (id) => {
//       // alert("")
//     let my = p1.filter((val1)=>{
//       return val1.id !== id
//     })
//     p2(my)
//     }
//   return (
//     <>
//       {p1.map((val)=>{
//         return( 
//         <h1>Name: {val.myName} & age: {val.age}
//         <button onClick={()=>Remove(val.id)}>Remove</button>
//         </h1>
//         )
//       })}
//       <button onClick={clearArray}>Clear</button>
//       </>
//   )
// }

// export default UseStateWithArray