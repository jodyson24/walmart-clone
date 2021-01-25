import React, { Component } from 'react';
import Reorder from '../Walmart_svgs_collection/svg16.svg';
import AccountI from '../Walmart_svgs_collection/svg18.svg';
import Bars from '../Walmart_svgs_collection/svg27.svg';
import Cart from '../Walmart_svgs_collection/svg31.svg';
import LogoIcon from '../Walmart_svgs_collection/svg2.svg';
import Navigation from '../components/Navigation'
// import AccountNavigation from '../components/AccNav'
import {
    Link,
    // BrowserRouter as Router,
    //Route 
}
    from 'react-router-dom';
//import SignIn from './SignIn'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNavigation: false,
            showAccountNavigation: false,
        }
    }

    toggleNavigation() {
        this.setState({
            showNavigation: !this.state.showNavigation
        })
    }

    toggleAccountNavigation() {
        this.setState({
            showAccountNavigation: !this.state.showAccountNavigation
        })
    }

    openMenu() {
        //document.querySelector('.acc-nav').classList.add('open');
        document.querySelector(".acc-nav-outer").style.display = "block";
        document.querySelector(".acc-nav").style.display = "block";
        console.log('click')
    }

    closeMenu() {
        //document.querySelector('.acc-nav').classList.remove('open')
        document.querySelector(".acc-nav-outer").style.display = "none";
        document.querySelector(".acc-nav").style.display = "none";
    }
    render() {
        return (
            //<Router>
            <div>
                <div className="header">
                    <div className="navL1 ">
                        <ul>
                            <li>Pick & Delivery</li>
                            <li className="links"><Link  to="/">
                                Walmart.com
                            </Link></li>
                        </ul>
                    </div>

                    <div className="navL2">
                        <div className="nav-icons">
                            <ul className="d-flex">
                                <li><img src={Bars} alt="bars" className="header-img" onClick={this.toggleNavigation.bind(this)} />
                                    {
                                        this.state.showNavigation ?
                                            <Navigation closeNavigation={this.toggleNavigation.bind(this)} />
                                            : null
                                    }</li>
                                <li className="logo-img">
                                    <Link to="/"><img src={LogoIcon} alt="account"  /></Link>
                                </li>
                            </ul>

                        </div>

                        <div className="nav-search-bar">
                            <input type="search" id="search" name="search" placeholder="Search your store" />
                        </div>
                        <div className="menu">
                            <ul >

                                <li className="account-key" onClick={this.openMenu} >
                                    <span className="menu-inline acc"> <img src={AccountI} className="header-img" alt="account" /> </span>
                                Accounts</li>
                                <Link to="/shop">
                                    <li>
                                        <span className="menu-inline"> <img src={Reorder} className="header-img" alt="reorder" /> </span>
                                Shop
                            </li>
                                </Link>

                                <Link to="/cart">
                                    <li>
                                        <span className="menu-inline"> <img src={Cart} className="header-img" alt="cart" /> </span>
                                        <span className="count">{this.props.counter}</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="d-center bg-white w-100 p-2">
                        <div className="row pl-3">
                            <div className="col-lg-2">
                                Next Day Delivery
                        </div>
                            <div className="col-lg-2">
                                Delivering to 90466
                        </div>
                        </div>
                    </div>
                    <div className="d-adv w-100">
                        <p>For your safety, everyone must wear a face covering in stores starting 7/20.</p>
                        <p className="learn-more lead">Learn more</p>
                    </div>
                </div>

                <div className="acc-nav-outer">
                    <div className="acc-nav">
                        <div className="w-100 d-flex justify-content-between p-4">
                            <div>
                                <span></span>
                                <h2>Accounts</h2>
                            </div>
                            <div onClick={this.closeMenu} >
                                X
                    </div>
                        </div>
                        <div className="acc-links">
                            <ul>
                                <li><Link to="/signIn">
                                    Sign in
                        </Link>
                                </li>
                                <li>Track Orders</li>
                                <li>Account</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            //</Router>




        )
    }
}

export default Header;