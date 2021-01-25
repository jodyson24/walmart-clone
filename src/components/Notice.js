import React from 'react'
import { Link } from 'react-router-dom'

function Notice(props) {
    props.cart.map((e, index) =>{
        const {image, name, price, qty, amount, netTotal, } = e
        const ip = `http://206.189.124.254:9000`;
        return (
            <div className="main-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2">
                            <img src={ip + image} alt="img" />
                        </div>
                        <div className="col-lg-3">
                            <h4> {name}</h4>
                            <p>Actual size: lorem</p>
                            <p>Actual color: Natural</p>
                            <p>Sold & shipped by WalCo.com, a Walmart company</p>
                        </div>
                        <div className="col-lg-1">
                            <h5>{price}</h5>
                            <h3>Total Price</h3>
                            <p>Free Delivery</p>
                        </div>
                        <div className="col-lg-3">
                            <div className="">
                                <ul>
                                    <li>
                                        <span>  Subtotal{qty}</span>
                                        <span>{amount} </span>
                                    </li>
                                    <li>
                                        <span>  Delivery</span>
                                        <span>Free</span>
                                    </li>
                                    <li>
                                        <span>Est. taxes & fees(Based on Based on zip code 9406694066)</span>
                                        <span>$118.13</span>
                                    </li>
                                </ul>
    
                                <div>
                                    <ul>
                                        <li>
                                            <span>Est. total</span>
                                            <span>{netTotal}</span>
                                        </li>
                                        <li>Earn 5% back <p>Learn how</p></li>
                                    </ul>
                                </div>
                            </div>
    
                        </div>
                        <div className="col-lg-3">
                            <div>
                                <button >
                                   <Link to="/cart">
                                   View Cart
                                   </Link>
                                </button>
                            </div>
                            <div>
                                <button >
                                   <Link to="/checkout">
                                   Checkout
                                   </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
   
   
}

export default Notice;