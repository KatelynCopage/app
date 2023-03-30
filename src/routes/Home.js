import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Work from '../components/Work'
import Footer from '../components/Footer'
import About from '../components/About'

const Home = () => {
  return (
    <div>
      {/* Import Routing page from Navbar.js routes to here then routes to App.js */}
      <Navbar/>
      <Heroimg/>
      <About/>
      {/* <Work/> */}
      <Footer/>
    </div>
  )
}

export default Home