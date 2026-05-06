import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-5">
      <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl w-full max-w-2xl">
        <h1 className="text-5xl font-bold text-center text-cyan-400">
          Contact Us
        </h1>

        <form className="mt-10 space-y-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />

          <textarea
            rows="5"
            placeholder="Your message..."
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          ></textarea>

          <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-4 rounded-xl duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact
