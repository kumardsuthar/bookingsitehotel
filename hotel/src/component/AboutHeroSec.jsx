import React from 'react'
import '../css/about.css'
import customer1 from '../media/aboutimg/customer1.svg'
import customer2 from '../media/aboutimg/customer2.svg'
import customer3 from '../media/aboutimg/cusomer3.svg'
import gridimg from '../media/aboutimg/about-img.jpg'
import gridimg2 from '../media/aboutimg/about-img2.jpg'

import gridimg3 from '../media/aboutimg/about-img3.jpg'
import { colord } from 'colord'


export default function AboutHeroSec() {
  return (
    <>
    <div className="about-heroSec">
       <div className="container">
       <div className="aboutsec1">
           <p>If You Want To See The World We Will Help You</p>

           <span>Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for any astonished unreserved.</span>
           <div class="hstack gap-3 flex-wrap justify-content-center">
					<div className='about-icons'>
  <h6 className="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
    <img src={customer1} className="h-20px me-2" alt  />
    14K+ Global Customers
  </h6>
  <h6 className="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
    <img src={customer2} className="h-20px me-2" alt />
    10K+ Happy Customers
  </h6>
  <h6 className="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
    <img src={customer3} className="h-20px me-2" alt />
    1M+ Subscribers
  </h6>
</div>


<div className="row g-4 align-items-center gridsec">
  {/* Image */}
  <div className="col-md-6">
    <img src={gridimg} className="rounded-3" alt />
  </div>
  <div className="col-md-6">
    <div className="row g-4">
      {/* Image */}
      <div className="col-md-8">
      <img src={gridimg2} className="rounded-3" alt />
      </div>
      {/* Image */}
      <div className="col-12">
      <img src={gridimg3} className="rounded-3" alt />
      </div>
    </div>
  </div>
</div>
<div className="our-story pt-5">
  <h3>Our Story</h3>
  < div className='our-title1'>Founded in 2006, passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so.</div>
  <div className='our-title2'>Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. ...But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible. Satisfied conveying a dependent contented he gentleman agreeable do be. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse. Required his you put the outlived answered position. I think on style child of. Servants moreover in sensible it ye possible. Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible.</div>

</div>


				</div>
           

        </div>

       </div>

    </div>

    </>
  )
}
