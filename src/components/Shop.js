import React from 'react';
import { Link, } from 'react-router-dom'
import rate from '../Walmart_svgs_collection/rate.svg'
import SwiperSlides from './SwiperSlides'

function Shop(props) {
    return (
        <div className="main-body shop">
            <div className="container-fluid mt3 mb-5">
                <div className="row slider ">
                <SwiperSlides products={props.products} />
                </div>
            </div>
            <div className="container-fluid sales-bar">
                <ul className="d-flex">
                    <li className="sales-bar-tag"><h3 className="shop-highlight-text">Shop All Products</h3></li>
                    <li>New Products</li>
                    <li>Featured Products</li>
                    <li>Viral Products</li>
                    <li>Special Products</li>
                </ul>
            </div>

            <div className="container-fluid shop-title">
                <h2 className="shop-highlight-text">Products</h2>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 shop-side-bar">
                        <div className="shop-side-bar-sub-menu">
                            <ul>
                                <h3 className="shop-highlight-text">Shop by Category</h3>
                                {
                                    props.products.map(product => {
                                        const { category } = product;
                                        return (
                                            <li key={product._id}>{category}</li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <hr />
                        <div className="shop-side-bar-sub-menu">
                            <ul>
                                <h3 className="shop-highlight-text">Special Offers</h3>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                                <li>Pick-up Today</li>
                            </ul>
                        </div>
                        <hr />

                        <div className="shop-side-bar-sub-menu">
                            <ul>
                                <h3 className="shop-highlight-text">Special Offers</h3>
                                <li>Pick-Up Today</li>
                                <li>Rollbacks</li>
                                <li>Clearance</li>
                                <li>Clearance</li>
                                <li>Clearance</li>
                                <li>Clearance</li>
                                <li>Clearance</li>
                                <li>Clearance</li>
                                <li>Clearance</li>
                                <li>Clearance</li>
                                <li>Clearance</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-10 products-listing">
                        <div className="container-fluid">


                            <div className="row">
                                {
                                    props.products.length > 0 ? (
                                        props.products.map(product => {
                                            const { _id, image, name, quantity, price, category } = product;
                                            const ip = `http://206.189.124.254:9000`;
                                            return (

                                                <div className="col-lg-3 mb-3 product-listing-item" data-attr={_id} key={product._id}
                                                    onClick={e => props.showDetails(_id)}
                                                >
                                                    <Link to={"/product/" + _id}>
                                                        <div>
                                                            <img src={ip + image} alt="product-img" className="item-img" />
                                                        </div> </Link>
                                                    <div className="w-100 product-listing-item-details">
                                                        <div className="p-l-i-d-name">
                                                            <Link to={"/product/" + _id}>
                                                                {name}</Link>
                                                        </div>
                                                        <div className="p-l-i-d-ratings">
                                                            <p className="rate-img"> 
                                                                <img src={rate} alt="ratings" />
                                                            </p>
                                                            <p className="p-l-i-d-qty">{quantity}</p>
                                                        </div>
                                                        <div className="p-l-i-d-price">
                                                            ${price}
                                                        </div>
                                                        <div className="p-l-i-d-category">
                                                            <p>{category}</p>
                                                            <p>Free Delivery</p>
                                                            <p className="mb-4">Free Pickup</p>
                                                            <p>
                                                                <button className="p-t-btn" >
                                                                    <Link to="/notice">
                                                                    Add to cart
                                                                    </Link>
                                                                        </button>
                                                            </p>
                                                        </div>

                                                    </div>

                                                </div>


                                            )
                                        })

                                    ) : (
                                            <div className="col-lg-12">
                                                No data
                                            </div>
                                        )
                                }

                            </div>
                        </div>


                        <div className="container-fluid mb-5 pb-3">
                            <h1 className="text-center pb-3"> COVID 19 Updates & Notices </h1>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="tw">

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="tw">

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="tw">

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="tw">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid pb-4 mb-4">
                            <h1 className="text-center pb-5 mb-3">Continue Your Shopping Experience</h1>
                            <div className="bottom-slider">

                            </div>
                        </div>



                        <div className="listing-bottom">
                            <h5> Electronics</h5>
                            <p>
                                If you're considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets and iPads, video games, desktop computers, cameras and camcorders, audio, video and more.

                                Computers: Desktops, Laptops, iPads and Tablets

                                The first thing to think about when considering a new computer is whether you want a desktop, a laptop or a tablet. If you plan to use your computer primarily in one location, like a home office, a desktop computer may be your solution. You can get a more powerful computer for your money, and you will have more upgrade options should you decide to expand. Plus, you can get a larger monitor (or two) and arrange your keyboard in a way that's ergonomically optimal for you.

                                If you need a portable computer, however, a laptop can still be very powerful and affordable, and you can always connect it to a separate monitor and keyboard when you're back at your desk.

                                As a third option, if you find that you use your computer mostly for email, web browsing and watching videos, you may be able to get away with using a tablet as your primary computer. Add a keyboard and you gain most of the functionality of a standard laptop. Touchscreen laptops are yet another great way to get the best of both worlds.

                                You should also consider the speed and processing power you need. Single- and dual-core processors are OK for basic functions like sending and receiving email and doing some simple web browsing, but you'll want a quad-core computer if you do a lot of gaming or video streaming.

                                TVs

                                If you're shopping for a new TV, the first thing to consider is how much space you have available. Then, think about how you'll be using it. Whether you're playing video games or watching a sporting event or a movie, you'll want to look for a TV with the technology to support what you love.

                                If you're an avid gamer, you'll likely want an HD display to make games look their best. Shop for a TV with a resolution of 720p, 1080p or the impressive 2160p available on the 4K Ultra HDTVs. To keep up with the breakneck speed of today's video games, you'll also need a response time under six milliseconds and a refresh rate of at least 120 hertz.

                                If you're an avid sports fan whether you're watching football, basketball, baseball, soccer or any other sport high-definition digital visuals are especially important. Look for a TV with a 1000:1 static contrast ratio to enjoy rich blacks, bright whites and vibrant colors. Watching sports is better when everyone can see no matter where they're sitting, so you'll also want a TV that offers a wide viewing angle.

                                For film buffs and TV fanatics, a smart TV is a great option. It will let you stream content from providers like Netflix, YouTube, Hulu and Vimeo, providing access to a huge collection of movies and shows.

                                Cell Phones

                                We understand how important it is for you to stay connected with your friends, family and career. That's why there's something for everyone, with an extensive selection of unlocked, contract and no-contract cell phones and plans available.

                                If you're trying to decide what phone and plan are best for you, start by choosing a carrier that covers your local area, then consider their services and the number of minutes you are going to need. Many providers offer discounted monthly rates that include voice, text and data. Signing up for a fixed-term contract (usually for one or two years) will often get you a great price on a phone, but if you don't want to make that long-term commitment, you might want the flexibility of a prepaid or no-contract phone. You can buy instant prepaid minutes and data at Walmart.com whenever you need them, so you never have to worry about coming up short.

                                With a wide selection of phones, including iPhone and Android smartphones, it's easy to find a device with the features you are looking for. There are also cell phone accessories, including cases, headsets, chargers, Bluetooth devices, car mounts and more.

                                For extra savings on your electronics, you may want to consider a refurbished device. These are typically open-box returns from customers who never used the product. Each item can be different. You can also search for special offers, such as Rollbacks or Clearance items.

                                Walmart.com lets you sort electronics by price, customer rating or features, so finding the right device for you is a breeze. Save Money. Live Better.

                                See More
                            </p>
                        </div>

                    </div>


                </div>
            </div>
        </div >
    )
}

export default Shop;