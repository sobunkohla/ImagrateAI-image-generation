import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {menuOpen, menuClose} from "./menu"
import { logo } from "./assets";

import { Home, CreatePost } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <header
        className="w-full flex justify-between items-center bg-white
       sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]"
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain scale-150 logo" />
        </Link>

        <div>
          <button className=" text-blue-700 text-4xl" onClick={menuOpen}><i className="fas fa-bars"></i></button>
          <div className=" absolute top-0 left-0 right-0 bottom-0 flex  items-center justify-center bg-slate-900 z-50 opacity-0 w-0 menu-back transition-all">
          <button className=" text-blue-700 text-4xl absolute right-4 top-3" onClick={menuClose}><i className="fas fa-times"></i></button>
            <ul className=" gap-10 flex flex-col text-center">
          <li>
           
          <a
          onClick={menuClose}
          href="../Intro/intro.html"
          className="font-inter font-bold  text-3xl text-sky-300 hover:text-violet-900 transition-all "
        >
          {" "}
          Home
        </a>
       
          </li>
          <li>
          <Link
          onClick={menuClose}
          to="/create-post"
          className="font-inter font-bold  text-3xl text-sky-300 hover:text-violet-900 transition-all"
        >
          {" "}
          Create
        </Link>
          </li>
          <li>
          <Link
          to="/"
          onClick={menuClose}
          className="font-inter font-bold  text-3xl text-sky-300 hover:text-violet-900 transition-all"
        >
          {" "}
          ShowCase
        </Link>
          </li>
        </ul>
          </div>
        </div>
        
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
