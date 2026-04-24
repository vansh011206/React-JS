import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setnum2] = useState(10)
 useEffect( function(){
  console.log("useEffect called")
 },[num])
 useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
 
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button 
      onMouseEnter={() => setNum(num + 1)}
      onMouseLeave={()=> setnum2(num+10)}
      >Increment</button>
    </div>
  )
}

export default App;
