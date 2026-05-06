import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-10 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-cyan-400">About Us</h1>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          We are passionate developers creating futuristic and elegant user
          interfaces with React. Our goal is to make web experiences smooth,
          responsive and visually attractive.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-cyan-400">Fast</h2>
            <p className="mt-4 text-gray-400">
              Optimized and blazing fast performance.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-cyan-400">Responsive</h2>
            <p className="mt-4 text-gray-400">
              Perfectly adapts to all screen sizes.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-cyan-400">Modern</h2>
            <p className="mt-4 text-gray-400">
              Stylish UI with modern components and layouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default About