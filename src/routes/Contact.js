import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Gallery header="CONTACT" text="Let's Connect"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact