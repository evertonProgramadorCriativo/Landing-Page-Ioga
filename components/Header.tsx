"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center   px-4 py-3">
        <div className="flex justify-between" style={{ width: "44rem" }}>
          {/* Logo */}
          <h1 className="text-xl font-bold text-amber-900">santosha</h1>

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-black">
              Home
            </a>
            <a href="#" className="hover:text-black">
              About
            </a>
            <a href="#" className="hover:text-black">
              Classes
            </a>
            <a href="#" className="hover:text-black">
              Contact
            </a>
          </nav>
        </div>

        {/* Botão Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Classes
          </a>
          <a href="#" className="block">
            Contact
          </a>

          <button className="w-full bg-black text-white py-2 rounded-lg">
            Join Now
          </button>
        </div>
      )}
    </header>
  );
}
