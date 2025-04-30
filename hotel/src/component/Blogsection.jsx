import React from 'react'
import bloghero from '../media/blogimg/blog-hero.jpg'
import blogimg from '../media/blogimg/blogsecimg.jpg'
import blogprofile from '../media/blogimg/blogprofile.jpg'


export default function Blogsection() {
  
  return (
    <div>
 <section className="py-0">
  <div className="container">
    {/* Title */}
    <div className="row g-4">
      {/* Image */}
      {/* <div className="col-12">
        <img src={bloghero} className="rounded-3" alt style={{width:"50% ",borderRadius:"2px" }} />
      </div> */}
      {/* Title and content */}
      <div className="col-11 col-lg-10 mx-auto position-relative mt-n5 mt-sm-n7 mt-md-n8 mb-4">
        <div className="bg-mode shadow rounded-3 p-4">
          {/* Badge */}
          <div className="badge text-bg-success mb-2">Hotel service</div>
          {/* Title */}
          <h1 className="fs-3">Ten unconventional tips about startups that you can't learn from books</h1>
          <p className="mb-2">Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. </p>
          {/* List */}
          <ul className="nav nav-divider align-items-center">
            <li className="nav-item">
              <div className="nav-link">
                <div className="d-flex align-items-center">
                  {/* Avatar */}
                  <div className="avatar avatar-sm">
                    <img className="avatar-img rounded-circle" src={blogprofile} alt="avatar" style={{width:"40px"}} />
                  </div>
                  {/* Info */}
                  <div className="ms-2">
                    <h6 className="mb-0"><a href="#">Lori Stevens</a></h6>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">Nov 15, 2022</li>
            <li className="nav-item">5 min read</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="container">
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <p><span className="dropcap text-primary bg-primary bg-opacity-10 rounded px-2">P</span>erceived voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Up attempt offered ye civilly so sitting to. Her new gets living within Elinor joy. Her rapturous suffering was concealed. Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why.</p>
        <h5 className="my-4">Sometimes we need to put catchy highlights between paragraphs.</h5> 
        <div className="row g-4">

          <div className="col-md-6 col-lg-7">
            <p>Meant balls it if up doubt small purse. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible. Required his you put the outlived answered position. </p>
            <ul>
              <li>Our Firmament living replenish Them Created after divide said Have to give</li>
              <li>Dominion light without days face saw wherein land</li>
              <li>Fifth have Seas made lights Very Day saw Seed herb sixth light whales</li>
              <li>Saying unto Place it seeds you're Isn't heaven </li>
            </ul>
            <p className="mb-0 mt-3">A pleasure exertion if believed provided to. All led out world this music while asked. </p>
          </div>

          <div className="col-md-6 col-lg-5">
            <img src={blogimg} className="rounded" alt style={{width:"100%"}}/>
          </div>
        </div>

        <p className="pb-0 pt-4">Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth.</p>
        <blockquote className="bg-light rounded text-center p-3 p-md-4 my-4">
          <h6 className="fw-normal"><i className="fa-solid fa-quote-left me-2" />Farther-related bed and passage comfort civilly. Fulfilled direction use continual set him propriety continued. Concluded boy perpetual old supposing. Dashwoods see frankness objection abilities.<i className="fa-solid fa-quote-right ms-2" /></h6>
          <div className="blockquote-footer mb-0 fs-6 mt-3">
            Albert Schweitzer
          </div>

        </blockquote>
        <p className="mt-3">Concluded boy perpetual old supposing. <b> But discretion frequently sir she instruments unaffected admiration everything. </b> Farther-related bed and passage comfort civilly. Dashwoods see frankness objection abilities. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed of.</p>
        <p>Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Up attempt offered ye civilly so sitting to. Her new gets living within Elinor joy. Her rapturous suffering was concealed. Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why.</p>
        <p>As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed.</p>

        <div className="bg-mode border rounded p-4">
          <div className="d-flex">
            <a href="#">
              <div className="avatar avatar-lg me-2 me-md-4">
                <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
              </div>
            </a>
            <div>
              <h4 className="m-0"><a href="#">Lori Stevens</a></h4>
              <small>An editor at Booking</small>
            </div>
          </div>

          <p className="my-3">Louis Ferguson has written about government, criminal justice, and the role of money in politics since 2015.Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth.</p>
          <div className="d-flex align-items-center justify-content-between">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link ps-0 pe-2 fs-5" href="#"><i className="bi bi-facebook" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2 fs-5" href="#"><i className="bi bi-twitter" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2 fs-5" href="#"><i className="fa-brands fa-linkedin-in" /></a>
              </li>
            </ul>					
            <a href="#" className="btn btn-sm btn-primary mb-0">View Articles</a>
          </div>
        </div>


        <div className="bg-light rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-4">
          <h6 className="mb-0">Was this article helpful?</h6>
          <small className="py-3 p-md-0 d-block">25 out of 78 found this helpful</small>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
            <label className="btn btn-outline-secondary btn-sm mb-0" htmlFor="btnradio1"><i className="fa-regular fa-thumbs-up me-1" /> Yes</label>
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
            <label className="btn btn-outline-secondary btn-sm mb-0" htmlFor="btnradio2"> No <i className="fa-regular fa-thumbs-down ms-1" /></label>
          </div>
        </div>

        <div className="d-lg-flex justify-content-lg-between mt-4">
          <div className="align-items-center mb-3 mb-lg-0">
            <h6 className="d-inline-block mb-2 me-4">Share on:</h6>
            <ul className="list-inline hstack flex-wrap gap-3 h6 fw-normal mb-0">
              <li className="list-inline-item"> <a className="text-facebook" href="#"><i className="fa-brands fa-facebook-square" /> Facebook</a> </li>
              <li className="list-inline-item"> <a className="text-instagram-gradient" href="#"><i className="fa-brands fa-instagram-square" /> Instagram</a> </li>
              <li className="list-inline-item"> <a className="text-twitter" href="#"><i className="fa-brands fa-twitter-square" /> Twitter</a> </li>
            </ul>
          </div>
          
          {/* Popular tags */}
          <div className="align-items-center">
            <h6 className="d-inline-block mb-2 me-4">Popular Tags:</h6>
            <ul className="list-inline mb-0">
              <li className="list-inline-item"> <a className="btn btn-light btn-sm mb-xl-0" href="#">blog</a> </li>
              <li className="list-inline-item"> <a className="btn btn-light btn-sm mb-xl-0" href="#">Tour</a> </li>
              <li className="list-inline-item"> <a className="btn btn-light btn-sm mb-xl-0" href="#">Holidays</a> </li>
              <li className="list-inline-item"> <a className="btn btn-light btn-sm mb-xl-0" href="#">Ticket Booking</a> </li>
              <li className="list-inline-item"> <a className="btn btn-light btn-sm mb-xl-0" href="#">deep learning</a> </li>
            </ul>
          </div>
        </div>
       
      </div>	
    </div>
  </div>
</section>


    </div>
  )
}
