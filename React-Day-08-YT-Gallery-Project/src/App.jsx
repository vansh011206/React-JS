import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const App = () => {

  const [Userdata, setUserdata] = useState([])
  const [index, setIndex] = useState(2)

  async function buttonclick() {
    console.log('Button Clicked')
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    console.log(res.data)
    setUserdata(res.data)
  }
  useEffect(() => {
    buttonclick();
  }, [index])

  let printdata = 'no user available'
  if (Userdata.length > 0) {
    printdata = Userdata.map((item) => {
      return (
        <div className='m-10'>
          <a href="{item.url}">
            <div key={item.id} className='h-40 w-44 bg - white rounded-2xl overflow-hidden'>
              <img className='h-full object-cover rounded-2xl' src={item.download_url} alt={item.author} />
            </div>
            <h2 className='text-white text-lg font-bold mt-2'>{item.author}</h2>
          </a>
        </div>
      )
    })
  }
  return (

    <div className='h-screen bg-black '>

      {/* <button className="bg-blue-500 hover:bg-blue-700 m-4 active:scale-95 text-white font-bold py-2 px-4 rounded"
       onClick={buttonclick}>
        Click full 
      </button> */}
      <data className='flex flex-wrap gap-4'>{printdata}</data>

      <div className='flex bg-black justify-center items-center gap-4'>
        <button className='bg-amber-600 cursor-pointer active:scale-95  w-30 rounded-2xl m-10 p-2'
        onClick={() => {
          if(index > 1){
          setIndex(index - 1)
          setUserdata([])
        }
      }}
        >Prev</button>
        <button className='bg-amber-600  cursor-pointer active:scale-95 w-30 rounded-2xl m-10 p-2'
         onClick={() => {
          if(index < 10){
            setIndex(index + 1)
            setUserdata([])
          }
        }
      }
      >Next</button>
      </div>
    </div> 
  )
}

export default App
