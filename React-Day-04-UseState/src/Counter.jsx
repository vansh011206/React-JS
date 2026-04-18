
import React, { useState } from 'react'

const Counter = () => {
  const [num, setNum] = useState(0)

  function Increase() {
    setNum(num + 1)
  }

  function Decrease() {
    setNum(num - 1)
  }
  function Reset() {
    setNum(0)
  }
  
  return (
    <div className='parent'>
      <div className="heading">Counter</div>
      <div className='written'>{num}</div>
      <div className="controls">
        <button onClick={Increase}>
          Increase
        </button>
        <button onClick={Decrease}>
          Decrease
        </button>
        <button onClick={Reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter;