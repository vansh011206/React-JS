import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-10 py-5 flex justify-between items-center shadow-lg">
      <h1 className="text-3xl font-bold text-cyan-400">NovaUI</h1>

      <div className="flex gap-6 text-lg">
        <Link className="hover:text-cyan-400 duration-300" to="/">
          Home
        </Link>

        <Link className="hover:text-cyan-400 duration-300" to="/about">
          About
        </Link>

        <Link className="hover:text-cyan-400 duration-300" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
export default Navbar
