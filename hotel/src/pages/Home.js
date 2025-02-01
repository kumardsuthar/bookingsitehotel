import React from 'react'
// import Popularcard from '../component/Popularcard'
import Hotelcard from '../component/Hotelcard'
import '../css/Card.css'

function Home() {
  return (
    <div>
      {/* <Popularcard/> */}
      <div className="tophoteltitle">
      {[...Array(4)].map((_, index) => (
       
        <Hotelcard/>
   
     ))}
      </div>
    </div>
  )
}

export default Home
