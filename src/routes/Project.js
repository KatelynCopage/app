import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Project1 from '../components/Project1'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Gallery header="CODING PROJECTS" text="Recent Works"/>
      <Project1/>
      <Footer/>
    </div>
  )
}

export default Project