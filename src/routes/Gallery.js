import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import WSPGallery from '../components/WSPGallery'


const Gallery1 = () => {
  const galleryImages = [
    {
        img: 'https://github.com/KatelynCopage/app/blob/main/src/assets/rowlet.png?raw=true'
    },
    {
        img: 'https://github.com/KatelynCopage/app/blob/main/src/assets/samurai.png?raw=true'
    },
    {
        img: 'https://github.com/KatelynCopage/app/blob/main/src/assets/miku.png?raw=true'
    },
    {
        img: 'https://github.com/KatelynCopage/app/blob/main/src/assets/luffy%20inspo.png?raw=true'
    },
    {
        img: 'https://github.com/KatelynCopage/app/blob/main/src/assets/tiga.png?raw=true'
    },
    {
        img: 'https://github.com/KatelynCopage/app/blob/main/src/assets/strw.png?raw=true'
    },
]
  return (
    
    <div>
      <Navbar/>
      <Gallery header="GALLERY" text="- Art Projects -"/>
      <WSPGallery
        galleryImages={galleryImages}
      />
      <Footer/>
    </div>

  )
}

export default Gallery1;