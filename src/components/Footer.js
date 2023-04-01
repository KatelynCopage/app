import "./footer.css"

import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import Footer from "../assets/footer.png"
import { NavLink } from "react-router-dom"


const footer = () => {
  return (
    <div className="footer">
        {/* <div className="cover">
            <img className="footimg" src={Footer} alt="FooterImg"/>
        </div> */}
        <div className="footer-container">
          <div className="center">
            <div className="social">
              <a target='_blank' href="https://www.linkedin.com/in/katelyn-copage-28b435226">
                <FaLinkedin
                  size={40}
                  background={URL}
                  style={{color: "#fff",
                  marginRight:"1rem" }}
                />
              </a>
              
              <a target='_blank' href="https://www.instagram.com/vn_rice/">
              <FaInstagram
                size={40}
                style={{color: "#fff",
                marginRight:"1rem" }}
              />
              </a>

              <a target='_blank' href="https://www.youtube.com/channel/UCLjAqJuZXraIAsTkZIrzZ-g">
              <FaYoutube
                size={40}
                style={{color: "#fff",
                marginRight:"1rem" }}
              />
              </a>

              <a target='_blank' href="https://github.com/KatelynCopage">
              <FaGithub
                size={40}
                style={{color: "#fff",
                marginRight:"1rem" }}
              />
              </a>
              
              <FiMail
                size={40}
                style={{color: "#fff",
                marginRight:"1rem" }}
              />
              
            </div> 
            
            <p> <small>© Made by Katelyn Copage 2022 development. All rights reserved.</small></p>
          </div>


        </div>
    </div>
  )
}

export default footer