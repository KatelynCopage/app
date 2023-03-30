import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Capstones from '../components/Capstone'
import Gallery from '../components/Gallery'

const Capstone = () => {
  return (
    <div>
        <Navbar/>
        <Gallery header="Capstone" text=""/>
        <Capstones/>
        <Footer/>
    </div>
  )
}

export default Capstone