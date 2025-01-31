import React from 'react'
import '../css/header.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
function Header() {
  return (
   
<>
<div id="desk-header">
    <header>
       <div>
          <h3>Logo</h3>
       </div>
       <div>
          <ul>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/about">Hotels</Link>
            </li>
            <li>
            <Link to="/about">Special Offers</Link>
            </li>
            <li>
            <Link to="/about">Blog</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>

            <li>
                <a href="#">
                <i class="fa-solid fa-bell"></i>
                </a>
            </li>
            <li>
                <a href="#">
                <i class="fa-solid fa-user"></i>
                </a>
            </li>
            <li>
                <a href="#" className='login-btn'>
                    Login
                    </a>
            </li>
          </ul>

          <i class="fa-solid fa-bars" id='menu-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
       </div>
   </header>
   </div>

   <div id="mob-header">
   <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Logo</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul>
            <li>
                <a href="#">About us</a>
            </li>
            <li>
                <a href="#">Hotels</a>
            </li>
            <li>
                <a href="#">Speacial Offer</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>

        
           
          </ul>

          <div className='social-div'>
             <span>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
             </span>
             <span>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
             </span>
             <span>
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
             </span>
          </div>
  </div>
</div>
   </div>
</>
  )
}

export default Header
