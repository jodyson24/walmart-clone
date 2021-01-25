import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                {/* {
                    this.props.products.map(function (product, index) {
                        const {image} = product
                        const ip = `http://206.189.124.254:9000`;
                        if(index < 5){
                            return(
                                <div>
                                <img src={ip+image} alt="img"/>
                                <p className="legend">Legend 1</p>
                            </div>
                            )
                        }
                    })
                } */}
               
               <div>
                    <img src="assets/1.jpeg" alt="img"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" alt="img" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt="img" />
                    <p className="legend">Legend 3</p>
                </div>
               
            </Carousel>
        );
    }
}

export default DemoCarousel;