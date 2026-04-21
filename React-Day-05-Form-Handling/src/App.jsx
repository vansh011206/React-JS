// Two-way-binding

import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');

  // const submithandler = (e) =>{
  //   e.preventDefault();
  //   console.log("Form Submitted");
  // }

  function submithandler(e){  
    e.preventDefault();
    console.log("Form Submittedb by" , title);
    setTitle("")
  }


  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-900">
  
  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80 border border-gray-700">
    <h2 className="text-2xl font-semibold text-center mb-4 text-white">
      Contact Form
    </h2>

    <form className="flex flex-col gap-3" onSubmit={submithandler}>
      
      <input
        type="text"
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        placeholder="Your Name"
        className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        onChange={()=>console.log("inputing...")}
        placeholder="Your Email"

        className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      /> 

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>

    </form>
  </div>

</div>
  )
}

export default App;