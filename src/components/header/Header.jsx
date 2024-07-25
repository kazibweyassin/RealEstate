import React from 'react'
import './header.css'

function Header() {
  return (
    <section className='h-wrapper'>
      <div className="  flexCenter paddings innerwidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className=" flexCenter h-menu">
          <a href="/">Residencies</a>
          <a href="/about">Our Values</a> 
          <a href="/contact">Contact Us</a>
          <a href=""> Get Started </a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>

    </section>
  )
} 

export default Header