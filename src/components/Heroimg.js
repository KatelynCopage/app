import "./Heroimg.css"

import React from 'react'
import IntroImg from "../assets/intro.png"
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            {/* <h1>Katelyn Copage</h1> */}
            <p>Freelance Developer</p>
            <h1>Katelyn Copage</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default Heroimg