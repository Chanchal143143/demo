// import React from 'react'

// const Form = () => {
//     const [data, setData] = useState({
//         name: "",
//         email: ""
//       })
//       const newV = (e) => {
//         const name = e.target.name
//         const value = e.target.value
//         setData((prev)=>{
//           return{
//             ...prev, [name] : value
//           }
//         })
//       }
//       const sub = (e) => {
//     console.log(data);
//       }
//       return (
        
//         <>
//           Name: <input type="text" name='name' value={data.name} onChange={newV} /> <br />
//           Email: <input type="text" name='email'value={data.email} onChange={newV}  /> <br />
//           <input type="submit" value="Submit" onClick={sub} />
//         </>
//       )
//     }

// export default Form
