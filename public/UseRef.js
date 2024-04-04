import React, { useRef, useState } from 'react'


const UseRef = () => {
      let [p1,p2] = useState()
      let logo = useRef()
      function pop(){
        p2(logo.current.value)
      }
      return (
        <>
          name: <input type="text" ref={logo} /> <br />
          <button onClick={pop}>Submit</button>
          <h1>{p1}</h1>
        </>
      )
    }
export default UseRef
