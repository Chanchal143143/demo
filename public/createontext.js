// import React, { createContext } from 'react'
// import CompA from './CompA'

// let FirstName = createContext()
// let LastName = createContext()
// const App = () => {
//   return (
//     <>
//     <FirstName.Provider value={"vinod"}>
//       <LastName.Provider value={"thapa"} >
//        <CompA />  
//        </LastName.Provider >
//     </FirstName.Provider>
//     </>
//   )

// }

// export default App
// export {FirstName, LastName}

// import React from 'react'
// import {FirstName, LastName} from './App'

// const CompC = () => {
//   return (
//     <>
//     <FirstName.Consumer> 
//         {(fname)=>{
//     return (
//     <LastName.Consumer> 
//         {(lname)=>{
//       return( <h1>MY NAME IS {fname}  {lname} </h1>
//       )
//     }} 
//     </LastName.Consumer>
//     )
//     }} 
//     </FirstName.Consumer>
//     </>
//   )
// }

// export default CompC