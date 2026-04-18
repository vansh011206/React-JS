// import React from 'react'

// const App = () => {
//   const clicked = (elem) => {
//     console.log(elem)
//   }
//   const onenter = () => {
//     console.log('Mouse entered!')
//   }
//   return (
//     <div>
//       <button p-2 m-2 width-2 h-1 onClick={clicked} onMouseEnter={onenter}>
//         Click me
//       </button>
//     </div>
//   )
// }



import React from 'react'

const App = () => {

  const pagescrolling = (elem) => {
    console.log(elem.deltaY)
  }

  return (
    <div onWheel={pagescrolling}>
      <div className="w-full h-screen bg-blue-950">
        Hello, World!
      </div>
      <div className="w-full h-screen bg-blue-600" >Hello, World!</div>
      <div className="w-full h-screen bg-blue-700" >Hello, World!</div>
    </div>
  )
}

export default App;





