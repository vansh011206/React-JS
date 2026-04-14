import React from 'react'
import card from './Components/card'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      {Navbar()}
      {card()}
  
    </div>
  )
}

export default App;
