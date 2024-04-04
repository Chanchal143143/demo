import React, { useEffect, useState } from 'react'

const UseEffect_2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width)
    function actual(){
        setWidthCount(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize", actual)
        return () => {
        window.removeEventListener("resize", actual)
        }
    })


  return (
    <div>
      <p>The actual size of the window is:</p>
      <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffect_2
