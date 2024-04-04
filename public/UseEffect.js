import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [count, setCount] = useState(0)
    function pop(){
        setCount(count+1)
    }
    useEffect(()=>{
        document.title = `chats(${count})`
    })
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={pop}>click 😃</button>
    </div>
  )
}

export default UseEffect
