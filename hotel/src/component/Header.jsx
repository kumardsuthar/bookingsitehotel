import React from 'react'
import '../css/header.css'
import {
    BrowserRouter as Router,
    Link,

  } from "react-router-dom";
function Header() {


 
  return (
   
<>
<div id="desk-header">
   <div class="container">
   <header>
       <div >
          <h3><Link to = "/" style={{color:"black"}}>GoTrip</Link></h3>
       </div>
       <div>
          <ul>
            <li>
            <Link to="/about">About Us</Link>
            </li>

            <li>
            <Link to="/hotel">Hotels</Link>
            </li>

            <li>
            <Link to="/specialoffer">Special Offers</Link>
            </li>

            <li>
            <Link to="/blog">Blog</Link>
            </li>
            
            <li>
            <Link to="/contactpage">Contact Us</Link>
            </li>

            <li>
                <a to="#">
                <i class="fa-solid fa-bell"></i>
                </a>
            </li>
            <li>
                <Link to="/profile">
                <i class="fa-solid fa-user"></i>
                </Link>
            </li>
            <li>
                <Link  to="/login" className='login-btn' >
                    Login
                    </Link>
            </li>
          </ul>

          <i class="fa-solid fa-bars" id='menu-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
       </div>
   </header>
   </div>
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
            <Link to="/about">About Us</Link>
            </li>

            <li>
            <Link to="/hotel">Hotels</Link>
            </li>

            <li>
            <Link to="/specialoffer">Special Offers</Link>
            </li>

            <li>
            <Link to="/blog">Blog</Link>
            </li>
            
            <li>
            <Link to="/contactpage">Contact Us</Link>
            
            </li>
          </ul>

          <div className='social-div'>
             <span>
                <a to="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
             </span>
             <span>
                <a to="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
             </span>
             <span>
                <a to="#">
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
