import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import TopHeader from "./components/TopHeader.jsx";
import MidContent from "./components/MidContent.jsx";
import Footer from "./components/Footer.jsx";
import "./components/assets/css/home.css";
import "./components/assets/css/homeresponsive.css";
import "./components/assets/css/common.css";
import "./components/assets/css/animation.css";

function App() {

  return (
    <>
      <div className="main ">
        <TopHeader/>
        <MidContent/>
        <Footer/>
        
    </div>
    </>
  )
}

export default App
