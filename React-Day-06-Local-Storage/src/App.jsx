import React from 'react'

const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem("name", "Vanshaj Sharma") 
  // localStorage.setItem("age", 21)
  // const name = localStorage.getItem("name")
  // const age = localStorage.getItem("age")
  // console.log(name, age)
  localStorage.removeItem("age")


  const user = {
    name: "Vanshaj Sharma",
    age: 21,
    city: "Delhi"
  }
  localStorage.setItem("user", JSON.stringify(user)) 
  const userData = localStorage.getItem("user")
  const users = JSON.parse(userData);
  console.log(users);
 
  return (
    <div>
      App
    </div>
  )
}

export default App
