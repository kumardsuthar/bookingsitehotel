import React from 'react'
import '../css/footer.css'

function Footer() {
    return (

        <>
            <footer>
                <div className="mainfooter mt-5 ">
                    <div  style={{ maxWidth: '1200px',margin:'20px auto' }} >
                        <div className="footer px-lg-5 px-3 pt-5">
                            <div className="row d-flex justify-content-between">
                                <div className="col-12 col-lg-6">
                                    <div class="sub-title">
                                        <h3>Booking</h3>
                                        <p className="footer-title">Subscribe to Our Newsletter</p>
                                        <input type="text" placeholder='Enter your email' className='footer-input ' />
                                        <button className='sent-btn mx-2'><a href="#"><i class="fa-solid fa-paper-plane "></i></a></button>
                                    </div>
                                </div>


                                <div class="col-12 col-lg-4  text-start d-flex justify-content-between flex-lg-row flex-lg-row flex-column">
                                    <div class="pagetitle">
                                        <h3 >Page</h3>
                                        <li><a href="#" className='f-page'>Blog</a></li>
                                        <li><a href="#" className='f-page'>About</a></li>
                                        <li><a href="#" className='f-page'>Contact us</a></li>
                                        <li><a href="#" className='f-page'>Services</a></li>
                                    </div>
                            
                              
                                    <div class="link-title">
                                        <h3>Links</h3>
                                        <li><a href="#" className='f-page'>Sign in</a></li>
                                        <li><a href="#" className='f-page'>Sign up</a></li>
                                        <li><a href="#" className='f-page'>Privacy Policy</a></li>
                                        <li><a href="#" className='f-page'>Tearms</a></li>
                                        <li><a href="#" className='f-page'>Cookie</a></li>

                                        <li><a href="#" className='f-page'>Supports</a></li>


                                    </div>
                                </div>

                            </div>
                            <hr />
                        
                                <div className=" row copyright-part d-flex justify-content-between mt-2">
                                    <div className="col-12 col-lg-6">
                                        <p className='copy-title '>Copyrights ©2023 Booking. build by Stackbros.</p>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                       <div class="f-icons d-flex gap-4 d-flex justify-content-lg-end justify-content-md-start">
                                       <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                                       </div>
                                       
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>


            </footer>
        </>

    )
}

export default Footer
