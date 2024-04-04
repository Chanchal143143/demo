import React, { useEffect, useState } from 'react'
import "./index.css"
// to get the from LS
let getLocalItem = () => {
    let list = localStorage.getItem("lists")
    if(list){
      return JSON.parse(localStorage.getItem("lists"))
    }else{
      return []
    }
}
const Todolist = () => {
    const [inputData, setInputData] = useState("")
    const [item, setItem] = useState(getLocalItem())
    const addItem = () => {
      if(!inputData){

      }else{
        setItem([...item,inputData])
        setInputData("")
      }
    }

    const deleteE = (id) => {
      console.log(id);
      let my = item.filter((elem,ind)=>{
        return ind !== id
      })
      setItem(my)
    }
    let removeAll = () => {
      setItem([])
    }
//  add data to local staorage
useEffect(()=>{
  localStorage.setItem("lists", JSON.stringify(item))
},[item])

  return (
    <>
   <div className="main">
    <div className="child">
      <figure>
        <img src="bholu.jpg" />
      </figure>
        <figcaption>Add Your List Here ✍️</figcaption>
        <div className="asd">
        <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
        <button onClick={addItem}> + </button>
        </div>
        {item.map((val, ind)=>{
          return(
            <>
            <h2 key={ind}>{val}
        <button onClick={() => deleteE(ind)}> 💧 </button>
        </h2>
            </>
          )
        })}
        <div className="pop">
        <button className='btn' onClick={removeAll}>Remove</button>
        </div>
    </div>
   </div>
      
    </>

  )
}

export default Todolist
