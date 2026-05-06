import React from 'react'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-black to-slate-800 text-white flex items-center justify-center px-10">
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            Build Modern <span className="text-cyan-400">React Apps</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Create beautiful, responsive and modern websites using React,
            Tailwind CSS and React Router with amazing UI experiences.
          </p>

          <button className="mt-8 bg-cyan-400 hover:bg-cyan-500 text-black font-bold px-8 py-4 rounded-xl text-lg duration-300 shadow-xl">
            Explore Now
          </button>
        </div>

        <div className="flex justify-center">
          <img
            className="rounded-3xl shadow-2xl w-full max-w-md"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home
