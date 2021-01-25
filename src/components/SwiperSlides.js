import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'


SwiperCore.use = ([Pagination, Navigation])
function SwiperSlides(props) {
    const slides = []

    // for (let i = 0; i < 5; i += 1) {
    //     slides.push(
    //         <SwiperSlide key={`slide-${i}`}>
    //             <img
    //                 src={`https://picsum.photos/id/${i+1}/500/300`}
    //                 alt={`Slide ${i}`}
    //                 />
    //         </SwiperSlide>
    //     )
    // }

    props.products.map((e, index) => {
        const { _id, image, name } = e;
        const ip = ` http://206.189.124.254:9000`;
        if (index < 4) {
            slides.push(
                <SwiperSlide key={`slide-${_id}`} tag="li" >
                    <img
                        src={ip + image}
                        alt={`Slide ${name}`} className="slide-img"
                    />
                </SwiperSlide>
            )
        }
    })

    return <React.Fragment>
        <Swiper id="main"
            tag="section"
            wrapperTag="ul" 
            pagination
            spaceBetween={0}
            slidesPerView={1}
            >
            {slides}
        </Swiper>
    </React.Fragment>
}

export default SwiperSlides