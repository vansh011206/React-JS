import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])


  const getData = async () => {
     const response = await axios.get('https://picsum.photos/v2/list')
     setData(response.data)

  }
  return (
    
    <div>
      <button className='btn' onClick={getData}>Get Data</button>
      {data.map((item) => (
        <div key={item.id} className='m-10 p-10 bg-white border-radius-10'>
          <h2>{item.author}</h2>
          <img src={item.download_url} alt={item.author}/>
        </div>
      ))
      }
    </div>

  )
}

export default App



   // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    // const data = await response.json()
    // console.log(data)
    //  const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    //  console.log(response.data) 
