
import React from 'react'
import Hero from '../component/Hero.jsx'
import Category from '../component/Category.jsx'

import Homepagetitle from '../component/Homepagetitle'
import Hotelcard from '../component/Hotelcard.jsx'
import ChectItOut from '../component/ChectItOut.jsx'
function Home() {
  return (
    <>
    <Hero/>
      {/* <Homepagetitle/> */}

      {/* <div className="tophoteltitle">
      {[...Array(4)].map((_, index) => (
        */}
        <Hotelcard/>
   
     {/* ))}
     </div> */}

     <ChectItOut/>
  

    {/* <div className="cate-sec"> */}

    {/* {[...Array(4)].map((_, index) => (
       
       <Category catetitle="Beach" catepalce="456 places" key={index}/>
     ))}

{[...Array(4)].map((_, index) => (
       
       <Category catetitle="Desert" catepalce="4560 places" key={index}/>
     ))} */}
  <Category/>
    
    {/* </div> */}


   </>
  )
}

export default Home


