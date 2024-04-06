import {useEffect, useState, useRef} from "react"
import NavBar from "./components/NavBar"
import './App.css'
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <NavBar />
      <div className="bg-green-50 ">
      <Main />
      <Footer />
      </div>
    </>
  )
}

export default App
