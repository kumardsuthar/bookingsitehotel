


import React, { useState } from 'react';
import cateimg from '../media/categoryimg/cate-01.jpg';
import cateimg01 from '../media/categoryimg/cate1.jpg';
import cateimg02 from '../media/categoryimg/cate2.jpg';
import cateimg03 from '../media/categoryimg/cate3.jpg';
import cateimg04 from '../media/categoryimg/cate4.jpg';
import cateimg05 from '../media/categoryimg/cate5.jpg';

import cateimg06 from '../media/categoryimg/cate6.jpg';
import cateimg07 from '../media/categoryimg/cate7.jpg';

import '../css/Card.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { catetitle: "Beach", catepalce: "4568 places", cateimg: cateimg },
  { catetitle: "Heritage", catepalce: "4567 places", cateimg: cateimg01 },
  { catetitle: "Desert", catepalce: "980 places", cateimg: cateimg02 },
  { catetitle: "Tower", catepalce: "467 places", cateimg: cateimg03},
  { catetitle: "Mountain", catepalce: "456 places", cateimg: cateimg04 },
  { catetitle: "temple", catepalce: "890 places", cateimg: cateimg05 },
  { catetitle: "festival", catepalce: "423 places", cateimg: cateimg06 },
  { catetitle: "Safari", catepalce: "4577 places", cateimg: cateimg07 },
  { catetitle: "Safari", catepalce: "873 places", cateimg: cateimg01 },
  { catetitle: "Safari", catepalce: "264 places", cateimg: cateimg01 },
  { catetitle: "Safari", catepalce: "2869 places", cateimg: cateimg01 },
  { catetitle: "Beach", catepalce: "687 places", cateimg: cateimg01 },
  { catetitle: "Heritage", catepalce: "456 places", cateimg: cateimg01 },
  { catetitle: "Desert", catepalce: "456 places", cateimg: cateimg01 },
  
];

function Category() {
  const [Data, setData] = useState("");

  const getData = (e) => {
    setData(e.target.value);
  };

  const filterOut = data.filter((item) =>
    item.catetitle.toLowerCase().includes(Data.toLowerCase())
  );


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
      
    ]
  };

  return (
    <>
      <div className="container mt-5">
        {/* <div className="search">
          <h3>Our Category</h3>
          <input
            type="text"
            placeholder="Search Here"
            onChange={getData}
            value={Data}
          />
        </div> */}
         <div class="hotelserch">
        <h2>Our Categories</h2>
        <div class="serchbar">
        <input type="text"  placeholder='search here....' onChange={getData} />
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

        <Slider {...settings} className="category-slider">
          {filterOut.map((item, index) => (
            <div className="category-sec" key={index}>
              <div>
                <img src={item.cateimg} alt={item.catetitle}  style={{width:"150px"}}/>
              </div>
              <div>
                <h4>{item.catetitle}</h4>
                <p>{item.catepalce}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Category;
