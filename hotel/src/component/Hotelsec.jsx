import React from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch } from "react-icons/fa";
import "../css/Hotel.css";

const HotelSearch = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <h1>150 Hotels in New York</h1>
        <div className="search-box">
          <div className="search-item">
            {/* <FaMapMarkerAlt className="icon" /> */}
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <p className="label">Location</p>
              <p className="value">San Jacinto, USA</p>
            </div>
          </div>

          <div className="search-item">
          <i class="fa-solid fa-calendar"></i>
            {/* <FaCalendarAlt className="icon" /> */}
            <div>
              <p className="label">Check in - out</p>
              <p className="value">19 Sep to 28 Sep</p>
            </div>
          </div>

          <div className="search-item">
          <i class="fa-solid fa-user"></i>
            {/* <FaUser className="icon" /> */}
            <div>
              <p className="label">Guests & rooms</p>
              <p className="value">2 Guests 1 Room</p>
            </div>
          </div>

          <div className="search-icon-wrapper">
          <i class="fa-solid fa-magnifying-glass"></i>
            {/* <FaSearch className="search-icon" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
