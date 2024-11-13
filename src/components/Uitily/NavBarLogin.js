import React, { useEffect } from 'react';
import logo from '../../images/logo.png';
import { Nav } from 'react-bootstrap';
import panier from '../../images/panier.png'; // Import your cart icon image here


const NavBarLogin = () => {


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
          <li className="cart-icon">
            <a href="#">
              <img src={panier} alt="Cart"/>
            </a>
          </li>
          <li>
            <a href="/login">
              <button className="button1">
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
            <a href="#">Panier</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBarLogin;
