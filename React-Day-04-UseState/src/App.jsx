// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(1)
//   const [user, setUser] = useState("Vanshaj")
//   const [money, setMoney] = useState([23,43,12,54,65,76,87,98])

//   function ChangeNum() {
//     setNum(num)
//     setUser("Sunil Baghel")
//     setMoney(money.map()
//   }

//   return (
//     <div>
//       <h1>the value of num is {num}</h1>
//       <h1>the value of user is {user}</h1>
//       <h1>the value of money is {money}</h1>
//       <button onClick={ChangeNum}>
//         Click Me
//       </button>
//     </div>
//   )
// }

// export default App;


// Object

// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState({user: "Vanshaj", age: 19, city: "Raipur"})

//   const clicked = () => {
//     const newNum = {...num};
//     newNum.user = "Sunil Baghel";
//     newNum.age = 20;
//     newNum.city = "Durg";
//     setNum(newNum);
//   }
  
//   return (
//     <div>
//       <h1>{num.user}</h1>
//       <p>Age: {num.age}</p>
//       <p>City: {num.city}</p>
//       <button onClick={clicked}>Click Me</button>
//     </div>
//   )
// }
// export default App;



// // Array

// import React,{ useState } from 'react'

// const App = () => {
//    const [num, setNum] = useState([10,20,30])
//    const clicked = () => { 
//     const newNum = [...num];
//     newNum[0] = 100;
//     newNum[1] = 200;
//     newNum[2] = 300;
//     setNum(newNum); 
//    }

//   return (
//     <div>
//       <h1>the value of array is {num}</h1>
//       <button onClick={clicked}>Click Me</button>
//     </div>
//   )
// }

// export default App


// batch method



import React,{ useState } from 'react'

const App = () => {
   const [num, setNum] = useState(60)
   const clicked = () => { 
      setNum(prev=>(prev+1)); 
      setNum(prev=>(prev+1)); 
      setNum(prev=>(prev+1)); 
   }

  return (
    <div>
      <h1>the value of num is {num}</h1>
      <button onClick={clicked}>Click Me</button>
    </div>
  )
}

export default App;