// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   const [num2, setnum2] = useState(10)

//   useEffect(function () {
//     console.log("useEffect called")
//   }, [num])

//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("Running...");
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>{num}</h1>
//       <h1>{num2}</h1>
//       <button
//         onMouseEnter={() => setNum(num + 1)}
//         onMouseLeave={() => setnum2(num + 10)}
//       >Increment</button>
//     </div>
//   )
// }

// export default App;

import React from 'react'
import { useEffect } from 'react'

const App = () => {
  
  const [a, setA] = React.useState(0)
  const [b, setB] = React.useState(0)
  useEffect(() => {
    console.log("useEffect called")
  }, [a,b])

  return (
    <div>
      <h2>{a}</h2>
      <h2>{b}</h2>
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b - 1)}>Increment B</button>
    </div>
  )
}

export default App
