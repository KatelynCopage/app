import React, { Component } from 'react'
import './Gallery.css'
// import WSPGallery from './WSPGallery'

class Gallery extends Component {
    render(){

        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.header}</h1>
                    <p>{this.props.text}</p>
                </div>
{/* 
                <WSPGallery
                    galleryImages={galleryImages}
                /> */}
        
            </div>
          )
        };
    }

export default Gallery