import React from 'react';

function Navigation(props) {
    return(
        <div className="Nav-outer">
            <div className="nav">
                <div className="icon-top d-flex w-100 justify-content-between pt-3 pb-2 mb-1 pl-3">
                   <div>
                       Logo
                   </div>
                    <div onClick={props.closeNavigation}>
                        <h2>X</h2>
                    </div>
                </div>
                <div className="quick-links ">
                   
                    <ul>
                    <h5>Walmart.Com</h5>
                        <li>Track orders</li>
                        <li>Reorder Items</li>
                        <li>Lists</li>
                        <li>Walmart Credit Card</li>
                        <li>Your Location</li>
                        <li>Local Store</li>
                    </ul>
                </div>
                <div className="line"></div>
                <div className="Dept-links pl-1">
                    <div className="d-flex justify-content-between pl-3">
                    <p>Departments</p>
                        <p>See all</p>
                    </div>
                       <ul className="n">
                           <li>Savings Spotlight</li>
                           <li>Back to School</li>
                           <li>Electronics & Office</li>
                           <li>Clothing, Shoes & Accessories</li>
                           <li>Home, furniture & Appliances</li>
                           <li>Patio & Garden</li>
                           <li>Home Improvement</li>
                           <li>Movies, Music & Books</li>
                           <li>Baby</li>
                           <li>Toys, Games, and Video Games</li>
                           <li>Food, household and Pets</li>
                           <li>Pharmacy, Health & Personal Care</li>
                           <li>Beauty</li>
                           <li>Sports, Fitness & Outdoors</li>
                           <li>Auto, Tires & Industry</li>
                           <li>Photo & Personalized Shop</li>
                           <li>Arts, Crafts, Sewing & Party Supplies</li>
                           <li>What's trending</li>
                       </ul>
                </div>
                <div className="line"></div>
                <div className="sub-menu pl-3">
                    <li>Registry</li>
                    <li>Gift Finder</li>
                    <li>Walmart Services</li>
                    <li>Digital Video by Vudu</li>
                    <li>Walmart Credit Card</li>
                    <li>Gift Cards</li>
                    <li>Weekly Ads</li>
                    <li>Ideas</li>
                    <li>Help</li>
                </div>
            </div>
        </div>
    )
}

export default Navigation;