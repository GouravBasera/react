import { createElement, useState } from 'react'
import React from 'react'

function App() {
    const [color, setColor] = useState("white")

  return (
    <div style={{background:color, height:"100vh", width:"100vw"}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button onClick={()=>setColor("red")} className='px-4 py-1 rounded-2xl text-white shadow-lg outline-none' style={{background:"red"}}>Red</button>
        <button onClick={()=>setColor("green")}className='px-4 py-1 rounded-2xl text-white shadow-lg outline-none' style={{background:"Green"}}>Green</button>
        <button onClick={()=>setColor("blue")}className='px-4 py-1 rounded-2xl text-white shadow-lg outline-none' style={{background:"Blue"}}>Blue</button>
        <button onClick={()=>setColor("olive")}className='px-4 py-1 rounded-2xl text-white shadow-lg outline-none' style={{background:"olive"}}>Olive</button>
        <button onClick={()=>setColor("grey")}className='px-4 py-1 rounded-2xl text-white shadow-lg outline-none' style={{background:"grey"}}>Grey</button>
        <button onClick={()=>setColor("yellow")}className='px-4 py-1 rounded-2xl shadow-lg outline-none' style={{background:"yellow"}}>Yellow</button>
        <button onClick={()=>setColor("pink")}className='px-4 py-1 rounded-2xl text-white shadow-lg outline-none' style={{background:"pink"}}>Pink</button>
        <button onClick={()=>setColor("purple")}className='px-4 py-1 rounded-2xl text-white shadow-lg outline-none' style={{background:"purple"}}>Purple</button>
        <button onClick={()=>setColor("lavender")}className='px-4 py-1 rounded-2xl shadow-lg outline-none' style={{background:"lavender"}}>Lavender</button>
        <button onClick={()=>setColor("white")}className='px-4 py-1 rounded-2xl shadow-lg outline-none' style={{background:"white"}}>White</button>
        <button onClick={()=>setColor("black")}className='px-4 py-1 rounded-2xl text-white shadow-lg outline-none' style={{background:"black"}}>Black</button>

      </div>
      </div>
    </div>
  )
}

export default App