import React from 'react';
// import FbIcon from '../Walmart_svgs_collection/svg35.svg';
// import TwitterIcon from '../Walmart_svgs_collection/svg36.svg';
// import PinterestIcon from '../Walmart_svgs_collection/svg37.svg';
// import YoutubeIcon from '../Walmart_svgs_collection/svg38.svg';
// import IGIcon from '../Walmart_svgs_collection/svg39.svg';
import PhoneIcon from '../Walmart_svgs_collection/svg40.svg';
import img1 from '../Walmart_img/1.png'
import img2 from '../Walmart_img/2.png'
import img3 from '../Walmart_img/3.png'
import img4 from '../Walmart_img/4.png'
import img5 from '../Walmart_img/5.png'
import img6 from '../Walmart_img/6.png'
import img7 from '../Walmart_img/7.jpg'
import img8 from '../Walmart_img/8.jpg'
import img9 from '../Walmart_img/9.png'
import img10 from '../Walmart_img/10.png'
import img11 from '../Walmart_img/11.png'

import Socials from './Socials'


function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid footer-region-one">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="input-group mb-3">
                            <input type="text" 
                                className="form-control" 
                                placeholder="Enter Email For Weekly Newsletter" 
                                aria-label="Recipient's username" 
                                aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary btn-dark txt-" 
                                    type="button" 
                                    id="button-addon2">Sign Up</button>
                                </div>
                        </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex">
                                <Socials />
                                {/* <img src={FbIcon} alt="socials" className="socials" />
                                <img src={TwitterIcon} alt="socials" className="socials"/>
                                <img src={PinterestIcon} alt="socials" className="socials"/>
                                <img src={YoutubeIcon} alt="socials" className="socials"/>
                                <img src={IGIcon} alt="socials" className="socials"/> */}
                            </div>
                        </div>
                        <div className="col-lg-2">
                        <p>
                        <img src={PhoneIcon} alt="socials" className="socials"/>
                        Mobile Apps
                        </p>
                        </div>
                    </div>
                    <div className="container-fluid footer-links">
                    <div className="row">
                        <div className="col-lg-2">
                            
                            <ul>
                            <h3>Walmart</h3>
                                <li>Grocery Pickup & Delivery</li>
                                <li>MoneyCenter</li>
                                <li>Walmart Credit Card</li>
                                <li>Walmart Pay</li>
                                <li>Weekly Ad</li>
                                <li>Other Services</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            
                            <ul>
                            <h3>Get to Know Us</h3>
                                <li>Our Company</li>
                                <li>Digital Museum</li>
                                <li>Our Suppliers</li>
                                <li>Sell on Walmart.com</li>
                                <li>Advertise With Us</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                           
                            <ul>
                            <h3>Walmart.com</h3>
                                <li>Walmart Labs</li>
                                <li>Our Ads</li>
                                <li>Terms of Use</li>
                                <li>Privacy & Security</li>
                                <li>CA Privacy Rights</li>
                                <li>Do Not Sell My PersonaL Information</li>
                                <li>Request My Personal Information</li>
                                <li>Tax Exempt Program</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            
                            <ul>
                            <h3>Customer Service</h3>
                                <li>Help Center</li>
                                <li>Returns</li>
                                <li>Product Recalls</li>
                                <li>Accessibility</li>
                                <li>Contact Us</li>
                                <li>Store Pickup</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            
                            <ul>
                            <h3>In The Spotlight</h3>
                                <li>Portable Air Conditioners</li>
                                <li>PS4</li>
                                <li>Trampoline</li>
                                <li>Skateboard</li>
                                <li>Outdoor Furniture</li>
                                <li>Nintendo Switch Lite</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="row text-center footer-shop-brands">
                        <p> 
                                <span className="pr-4">
                                Shop Our Brands
                                </span>
                                <img src={img1} alt="brand-links" />
                                <img src={img2} alt="brand-links" />
                                <img src={img3} alt="brand-links" />
                                <img src={img4} alt="brand-links" />
                                <img src={img5} alt="brand-links" />
                                <img src={img6} alt="brand-links" />
                                <img src={img7} alt="brand-links" />
                                <img src={img8} alt="brand-links" />
                                <img src={img9} alt="brand-links" />
                                <img src={img10} alt="brand-links" />
                                <img src={img11} alt="brand-links" />
                        </p>
                    </div>
                </div>
                <div className="container-fluid footer-region-two d-flex w-100">
                    <div className="">
                         2020 Walmart. All Rights Reserved.
                    </div>
                    <div className="">
                        <p>To ensure we are able to help you as best we can,
                             please include your reference number: ZQKWCIFRY0</p>
                    </div>
                </div>
            </div>
    )
}

export default Footer;