import { useState } from 'react'
import './App.css'

function App() {
  const [bodyColor,setColor] = useState("#ffb3cb")
 const bodyColors = "#ffb3cb"
  return (

    <>
        <div className="w-full h-screen duration-200"
        style={{backgroundColor : bodyColor}}>



              <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

                  <button  onClick={(e)=>{setColor("red")}}
                  className="outline-none px-4 py-1 rounded-full text-sm text-black bg-red-500 shadow-lg" 
                    style={{backgroundColor : "red"}}
                  >RED</button>
                  <button  onClick={(e)=>{setColor("green")}}
                  className="outline-none px-4 py-1 rounded-full text-2xl text-black bg-green-500 shadow-lg" 
                    style={{backgroundColor : "green"}}
                  >GREEN</button>
                  <button  onClick={(e)=>{setColor("blue")}}
                  className="outline-none px-4 py-1 rounded-full text-sm text-black bg-blue-500 shadow-lg" 
                    style={{backgroundColor : "blue"}}
                  >BLUE</button>
                  <button  onClick={(e)=>{setColor("purple")}}
                  className="outline-none px-4 py-1 rounded-full  text-black text-2xl bg-purple-500 shadow-lg" 
                    style={{backgroundColor : "purple"}}
                  >PURPLE</button>
                  <button  onClick={(e)=>{setColor(bodyColors)}}
                  className="outline-none px-3  py-1 rounded-full text-sm text-black  shadow-lg" 
                    style={{backgroundColor : "transparent"}}
                  >RESET</button>
                  
                </div>
              </div>
            </div>

    </>
  )
}

export default App
