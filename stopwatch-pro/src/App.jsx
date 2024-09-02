import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [time ,setTime] = useState(0)
  const [running,setRunning] = useState(false)

  useEffect(()=>
  {
    let interval;
    if(running)
    {
      interval = setInterval(() => {
        setTime((prevTime)=>prevTime+10)
      }, 10);
    }
    else if(!running)
    {
      clearInterval(interval)
    }
    return ()=>clearInterval(interval)
  },[running])
  return (
    <div className=' bg-gray-700'>
     <div>
      <span>{"0"+Math.floor((time/60000)%60)}:</span>
      <span>{"0"+Math.floor((time/1000)%60)}:</span>
      <span>{"0"+Math.floor((time/10)%100)}</span>
      </div>
      <div>
        <button className='border rounded-lg py-1 px-3 bg-green-700 m-3' onClick={()=>setRunning(true)}>Start</button>
        <button className='border rounded-lg py-1 px-3 bg-red-700 m-3' onClick={()=>setRunning(false)}>Stop</button>
        <button className='border rounded-lg py-1 px-3 bg-yellow-500 m-3' onClick={()=>setTime(0)}>Reset</button>
        </div>   
    </div>
  )
}

export default App
