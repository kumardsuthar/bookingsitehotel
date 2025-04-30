import React, { useState } from 'react'
import '../css/Card.css'
import cardimg from '../media/homepage/card-1.jpg'
import cardimg2 from '../media/homepage/card2.jpg'
import cardimg3 from '..//media/homepage/card3.jpg'
import cardimg4 from '../media/homepage/card4.jpg'

import { useNavigate } from 'react-router-dom'

const hotelData=[
  {
    hotelimg:cardimg,
    rate:"4.5",
    hotelname:"Hotel Baljees Regency",
    hotelthing:"Air conditioning",
    hotelwifi:"wifi",
    Hotelkitchen:"kitchn",
    hotelpool:"pool",
  
  },
  {
    hotelimg:cardimg2,
    rate:"4.5",
    hotelname:"Pride moon Village Resort & Spa",
    hotelthing:"Air conditioning",
    hotelwifi:"wifi",
    Hotelkitchen:"kitchn",
    hotelpool:"pool",
  
  },
  {
    hotelimg:cardimg3,
    rate:"4.5",
    hotelname:"Royal Beach Resort",
    hotelthing:"Air conditioning",
    hotelwifi:"wifi",
    Hotelkitchen:"kitchn",
    hotelpool:"pool",
  
  },
  {
    hotelimg:cardimg4,
    rate:"4.5",
    hotelname:"Park Plaza Lodge Hotel",
    hotelthing:"Air conditioning",
    hotelwifi:"wifi",
    Hotelkitchen:"kitchn",
    hotelpool:"pool",
  
  },
  
]

function Hotelcard() {
  const [hotel , setHotel] = useState("")
  const navigate = useNavigate();

  function clicknavigate(){
    navigate('/allcategories')

  }


  function hotelsearch(e){
    setHotel(e.target.value);
    

  }
  const searchFilteredHotels = hotelData.filter((item) => {
    const searchText = hotel.toLowerCase();
    return (
      item.rate.toLowerCase().includes(searchText) ||
      item.hotelname.toLowerCase().includes(searchText) ||
      item.hotelthing.toLowerCase().includes(searchText) ||
      item.hotelwifi.toLowerCase().includes(searchText) ||
      item.Hotelkitchen.toLowerCase().includes(searchText) ||
      item.hotelpool.toLowerCase().includes(searchText)
    );
  });


  return (
    <div className='categoty'>
     <div class="container">
     <div class="hotelserch">
        <h2>Top Categories</h2>
        <div class="serchbar">
        <input type="text"  placeholder='search here....' onChange={hotelsearch} />
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div class="category-card">
      {
        searchFilteredHotels.map((item)=> {
          return(
            <div className="card" style={{maxWidth:"300px"}}>
        <img src={item.hotelimg} alt="#" style={{width:"100%"}}/>
        <div className="card-describtion">
          <div className="rate d-flex justify-content-between align-item-center pt-3">
            <span className='rating'><i className="fa-solid fa-star" style={{ color: "#F7C32E" }}></i> <span> {item.rate}</span></span>
            <i class="fa-regular fa-bookmark mx-2 pt-1"></i>
          </div>
          <div className="card-title pt-2 text-start">
            <h5 style={{ fontWeight: "700" }}>{item.hotelname}</h5>
            <div className="card-thigs ">
              <span>{item.hotelthing}</span>
              <i className="fa-solid fa-circle mx-1" style={{ fontSize: "5px" }}></i>
              <span>{item.hotelwifi}</span>
              <i className="fa-solid fa-circle mx-1" style={{ fontSize: "5px" }}></i>
              <span>{item.Hotelkitchen}</span>
              <i className="fa-solid fa-circle mx-1" style={{ fontSize: "5px" }}></i>
              <span>{item.hotelpool}</span>
            </div>
            <div class="price d-flex justify-content-between pt-5">
              <span className='d-flex'><p className='dolar-price '>$750</p><span style={{ color: "gray" }}> /day</span> <del className='mx-2' style={{ color: "gray" }}>$1000</del></span>
              <div >
                <span className="view-btn">View Detail  <i className="fa-solid fa-arrow-right-long"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
          )
        })
      }
      </div>

      <div class="categoty-btn mt-4">
        <button onClick={clicknavigate}>view More <i class="fa-solid fa-arrow-right"></i></button>
      </div>
     </div>
    </div>
  )
}

export default Hotelcard
