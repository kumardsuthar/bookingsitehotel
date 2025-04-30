
import React from 'react';

function Hotelfiltercard({ data }) {
  return (
    <div>
      {data.length === 0 ? (
        <p>No results found.</p>
      ) : (
        data.map((item, index) => (
          <div key={index} className="listing-card">
            <div className="list-img">
              <img src={item.img} alt="" style={{ width: "400px", borderRadius: "10px" }} />
            </div>
            <div className="listdescription">
              <div className="star">
                {[...Array(Number(item.rating))].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
              </div>
              <h4>{item.name}</h4>
              <p>{item.location}</p>
              <ul className='facility'>
                {item.amenities.map((facility, i) => <li key={i}>{facility}</li>)}
              </ul>
              <div className="confirmation">
                <p>{item.confirmation}</p>
              </div>
              <div className="price d-flex">
                <h5>{item.price}</h5> <span> /day</span>
              </div>
              <button className="filterbtn">Select Room</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Hotelfiltercard;
