import React from 'react';
// import DemoCarousel from './Slider'
import SwiperSlides from './SwiperSlides'
// import Swiperr from './Swiperr'
import pic1 from '../../src/Walmart_img/at1.jpg'
import pic2 from '../../src/Walmart_img/at2.jpg'
import pic3 from '../../src/Walmart_img/at3.jpg'

import pic4 from '../../src/Walmart_img/co1.jpg'
import pic5 from '../../src/Walmart_img/co2.jpg'
import pic6 from '../../src/Walmart_img/co3.jpg'
import pic7 from '../../src/Walmart_img/co4.jpg'

import pic8 from '../../src/Walmart_img/cp1.jpg'
import pic9 from '../../src/Walmart_img/cp2.jpg'
import pic10 from '../../src/Walmart_img/cp3.jpg'
import pic11 from '../../src/Walmart_img/cp4.jpg'

import pic12 from '../../src/Walmart_img/sw1.jpg'
import pic13 from '../../src/Walmart_img/sw2.jpg'
import pic14 from '../../src/Walmart_img/sw3.jpg'


function Home(props) {

    return (
        <section className="main-body">
            <div className="container-fluid mt3 mb-5">
                <div className="row slider ">
                   <SwiperSlides products={props.products} />
                   {/* <Swiperr /> */}
                </div>
            </div>

            <div className="container-fluid mb-4 pb-4">
                <h3 className="text-center pb-4 mb-3">College Prep for less</h3>
                <div className="row new-products">
                    <div className="col-lg-3">
                        <div className="at-img">
                            <img src={pic8} alt="img" />
                        </div>
                        <p className="text-center pt-3">The College Shop</p>
                    </div>
                    <div className="col-lg-3">
                        <div className="at-img">
                            <img src={pic9} alt="img" />
                        </div>
                        <p className="text-center pt-3">Decor under $25</p>
                    </div>
                    <div className="col-lg-3">
                        <div className="at-img">
                            <img src={pic10} alt="img" />
                        </div>
                        <p className="text-center pt-3">Up to 20% off laptops</p>
                    </div>
                    <div className="col-lg-3">
                        <div className="at-img">
                            <img src={pic11} alt="img" />
                        </div>
                        <p className="text-center pt-3">Study furniture from $50</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-4 pb-3">
                <h2 className="text-center pb-4 mb-3">Laptops</h2>
                <div className="row">
                    {
                        props.laptops.map((laptop, index) => { 
                            const ip = `http://206.189.124.254:9000`;
                            if (index < 4) {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6 p-2 mb-5 pb-3" key={index}>
                                        <div className="nt">
                                            <img src={ip + laptop.image} alt="laptop-img" className="home-img" />
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {/* <div className="col-lg-3 p-2">
                        <div className="nt">

                        </div>
                    </div> */}

                </div>
            </div>

            <div className="ads">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-md-4 p-2 pl-3 pt-3 pb-3">
                            <div className=" at">
                                <div className="at-img at-one">
                                    <img src={pic1} alt="img" />
                                </div>
                                <div className="at-details">
                                    <h3>Thousands of Stores</h3>
                                    <p>Choose a nearby store to see what's available.</p>
                                </div>
                                <div className="at-btn">
                                    <button className="at-btn-btn">Find a Store</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-md-4 p-2 pt-3 pb-3">
                            <div className="at">
                                <div className="p-3">
                                    <h3>Get $50 Back</h3>
                                </div>
                                <div className="at-img">
                                    <img src={pic2} alt="img" />
                                </div>
                                <div className="at-details">
                                    <h3>Get $50 Back</h3>
                                    <p>when you spend $300 in the first 3 months</p>
                                </div>
                                <div className="at-btn">
                                    <button className="at-btn-btn">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-md-4  p-2 pt-3 pb-3 pr-3">
                            <div className=" at">
                                <div className="p-3">
                                    <h3>Summer clearance</h3>
                                </div>
                                <div className="at-img">
                                    <img src={pic3} alt="img" />
                                </div>
                                <div className="at-details">
                                    <h3>Last-chance Savings</h3>
                                    <p>Hot-finds at low prices</p>
                                </div>
                                <div className="at-btn">
                                    <button className="at-btn-btn">Shop now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 cat mt-5 mb-5">
                <h1 className="text-center pb-3 pt-3 mb-2">Shop by Category</h1>
                <div className="row justify-content-center">
                    {
                        props.products.map((product, index) => {
                            const { image, category } = product;
                            const ip = `http://206.189.124.254:9000`;
                            if (index < 10) {
                                return (
                                    <div className="col-lg-2 col-md-3 col-sm-4 p-1" key={index}>
                                        <div className="cw">
                                            <div>
                                                <img src={ip + image} alt="product-img" className="item-img" />
                                            </div>
                                            <h3 className="text-size">{category}</h3>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    
                </div>
            </div>

            <div className="container-fluid pb-5 pt-5 mt-3 mb-3">
                <h1 className="text-center pb-4 pt-4">Summer Must Haves</h1>
                <div className="row">
                    <div className="col-lg-4 p-2">
                        <div className="sw">
                            <img src={pic12} alt="img" />
                        </div>
                        <div className="info-box">
                            <p>Play it cool</p>
                            <p> Get kids out of the heat & into the fun zone with games, toys, puzzles, & more.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="sw">
                            <img src={pic13} alt="img" />
                        </div>
                        <div className="info-box">
                            <p>Fitness from $15</p>
                            <p>Rev up your at-home workout routine with cardio gear, weights, accessories, & more.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="sw">
                            <img src={pic14} alt="img" />
                        </div>
                        <div className="info-box">
                            <p>Read. Watch. Listen.</p>
                            <p>Explore our huge selection of top summer picks in books, movies, & music.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-5 pb-3">
                <h1 className="text-center pb-3"> COVID 19 Updates & Notices </h1>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="tw">
                            <div className="at-img">
                                <img src={pic4} alt="img" />
                            </div>
                            <div className="at-details">
                                <h3>Routine-ready Safety Picks</h3>
                                <p>Masks, Disinfectants & More</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="tw">
                            <div className="at-img">
                                <img src={pic5} alt="img" />
                            </div>
                            <div className="at-details">
                                <h3>No-contact Services</h3>
                                <p>Curbside Pickup & More</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="tw">
                            <div className="at-img">
                                <img src={pic6} alt="img" />
                            </div>
                            <div className="at-details">
                                <h3>Outdoor Family Fun</h3>
                                <p>How to picnic like a pro</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="tw">
                            <div className="at-img">
                                <img src={pic7} alt="img" />
                            </div>
                            <div className="at-details">
                                <h3>Last-chance Savings</h3>
                                <p>Hot-finds at low prices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pb-4 mb-4">
                <h1 className="text-center pb-5 mb-3">Continue Your Shopping Experience</h1>
                <div className="bottom-slider">

                </div>
            </div>
        </section>
    )
}

export default Home;