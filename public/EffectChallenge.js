// import React, { useEffect, useState } from 'react'

// const EffectChallenge = () => {
//     let [count, setCount] = useState(0)
//     function pop(){
//         setCount(count+1)
//     }
//     useEffect(()=>{
//         if(count > 0){
//             document.title = `chats(${count})`
//          }
//          else{
//             document.title = `chats`
//          }
//     })
//   return (
//     <div>
//       <h1> {count} </h1>
//       <button onClick={pop}>click 😃</button>
//     </div>
//   )
// }

// export default EffectChallenge

// import React, { useEffect, useState } from 'react'

// const EffectChallenge = () => {
//     let [count, setCount] = useState(0)
//     function pop(){
//         setCount(count+1)
//     }
//     useEffect(()=>{
//         console.log("yes")
//     },[])

//     useEffect(()=>{
//         if(count > 0){
//             document.title = `chats(${count})`
//          }
//          else{
//             document.title = `chats`
//          }
//     },[count])
//   return (
//     <div>
//       <h1> {count} </h1>
//       <button onClick={pop}>click 😃</button>
//     </div>
//   )
// }

// export default EffectChallenge
