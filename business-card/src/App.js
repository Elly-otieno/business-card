import React from 'react'
import Main from "./components/Main"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
        <Main />
        <About />
        <Interests />
        <Footer />
    </div>
  )
}

export default App