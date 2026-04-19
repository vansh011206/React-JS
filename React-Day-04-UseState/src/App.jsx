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


import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user: "Vanshaj", age: 19, city: "Raipur"})

  const clicked = () => {
    const newNum = {...num};
    newNum.user = "Sunil Baghel";
    setNum(newNum);
  }

  
  return (
    <div>
      <h1>{num.user}</h1>
      <p>Age: {num.age}</p>
      <p>City: {num.city}</p>
      <button onClick={clicked}>Click Me</button>
    </div>
  )
}

export default App

