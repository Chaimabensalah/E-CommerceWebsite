import React, { useEffect } from 'react';
import logo from '../../images/logo.png';
import { Nav } from 'react-bootstrap';


const NavBarLogin = () => {
  useEffect(() => {
    const mobileNav = document.querySelector(".hamburger");
    const navbar = document.querySelector(".menubar");

    const toggleNav = () => {
      navbar.classList.toggle("active");
      mobileNav.classList.toggle("hamburger-active");
    };

    mobileNav.addEventListener("click", toggleNav);

    // Cleanup event listener on component unmount
    return () => mobileNav.removeEventListener("click", toggleNav);
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Add to Favorites" />
          <h1>MyShop</h1>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
          <a href="/login">
          <button href="/login" className="button1">
            <span>Login</span>
          </button> 
          </a>
           </li>
        </ul>
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
      <div className="menubar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBarLogin;
