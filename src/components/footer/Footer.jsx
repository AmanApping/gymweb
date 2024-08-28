import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = (handleChange, home_data) => {
  const data = localStorage.getItem('data')
  const JSONFormate = JSON.parse(data)
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
          <textarea
            className="active text-center"
            defaultValue={JSONFormate?.nav_title ? JSONFormate?.nav_title : home_data?.nav_title}
            onChange={handleChange}
            name="nav_title"
            style={{
              background: 'transparent',
              overflow: "hidden",
              border: 'none',
              fontSize: "30px",
              color: "white",
              fontWeight: "800",
              padding: '10px',  // Optional: removes default padding
              margin: '0',   // Optional: removes default margin
              resize: 'none', // Optional: disables resizing
              width: '100%',
              minHeight: "50px",// Optional: adjust width as needed
              maxHeight: '50px' // Optional: adjust height as needed
            }}
          />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer