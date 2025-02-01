import React from 'react'
import '../css/Card.css'
import  cardimg from '../media/homepage/card-1.jpg'

function Hotelcard() {
  return (
    <div>
       <div className="card">
                                <img src={cardimg} alt="#" />
                              <div className="card-describtion">
                              <div className="rate d-flex justify-content-between align-item-center pt-3">
                                    <span className='rating'><i className="fa-solid fa-star"style={{color:"#F7C32E"}}></i> <span> 4.5</span></span>
                                    <i class="fa-regular fa-bookmark mx-2 pt-1"></i>
                                </div>
                                <div className="card-title pt-2 text-start">
                                    <h5 style={{fontWeight:"700"}}>Hotel Baljees Regency</h5>
                                    <div className="card-thigs ">
                                        <span>Air conditioning</span>
                                        <i className="fa-solid fa-circle mx-1" style={{fontSize:"5px"}}></i>
                                        <span>wifi</span>
                                        <i className="fa-solid fa-circle mx-1" style={{fontSize:"5px"}}></i>
                                        <span>kitchen</span>
                                        <i className="fa-solid fa-circle mx-1" style={{fontSize:"5px"}}></i>
                                        <span>pool </span>
                                    </div>
                                    <div class="price d-flex justify-content-between pt-5">
                                       <span className='d-flex'><p  className='dolar-price '>$750</p><span style={{color:"gray"}}> /day</span> <del className='mx-2' style={{color:"gray"}}>$1000</del></span>
                                       <div >
                                    <span className="view-btn">View Detail  <i className="fa-solid fa-arrow-right-long"></i></span>
                                       </div>
                                    </div>
                                </div>
                              </div>
                            </div>
    </div>
  )
}

export default Hotelcard
