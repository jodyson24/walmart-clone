import React from 'react'
import { Link } from 'react-router-dom';

function Cart(props) {

    return (
        <div className="main-body">
            <div className="container-fluid">

                {
                    props.cart.length > 0 ? (
                        props.cart.map((item, index) => {
                            const {id, image, name, qty, price, itemTotal } = item;
                            const ip = `http://206.189.124.254:9000`;
                            return (
                           <div className="row" key={index} >
                                    <div className="col-lg-9 cart">
                                        <div className="mb-3 mt-3 p-3" key={index} data-attr={id}>
                                            <div className=" row cart-item">
                                                <div className="img col-lg-2">
                                                    <img src={ip + image} alt="img" />
                                                </div>
                                                <div className="name col-lg-6 pt-2">
                                                    <h4> {name}</h4>
                                                    <p>Actual size: lorem</p>
                                                    <p>Actual color: Natural</p>
                                                    <p>Sold & shipped by WalCo.com, a Walmart company</p>
                                                </div>
                                                <div className="qty col-lg-2 pt-2">
                                                    <label>Qty:</label>
                                                    <select value={props.quantity} className="qty-details"
                                                        name="quantity" id="quantity"
                                                        onSelect={e => props.updateQty(e)}>
                                                        <option defaultValue={qty}>{qty}</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                    </select>

                                                </div>
                                                <div className="price col-lg-2 pt-2">
                                                    <h5>{price}</h5>
                                                    <h3>{itemTotal}</h3>
                                                    <p>Free Delivery</p>
                                                </div>
                                            </div>
                                            <div className="row justify-content-end mt-4 c-option">
                                                <div className=" d-flex">
                                                    <p
                                                        onClick={() => props.removeItem(id)}
                                                        className="c-option-menu pr-2">Remove</p>
                                                    <p className="pr-2">|</p>
                                                    <p className="c-option-menu">Save for later</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 pt-5">
                                        <button className="submit-btn form-btn">Checkout</button>
                                    </div>
                                </div >
                            )

                        })
                    ) : (
                            <div className=" mt-3 row">
                                <div className="col-lg-4 pt-5 pb-4">
                                    <h1 className="text-3">Cart is Empty</h1>
                                    <div className="btn mt-3 pt-4">
                                        <Link to="/">
                                            <button className="submit-btn">Continue Shopping</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>

        </div>

    )
}

export default Cart;