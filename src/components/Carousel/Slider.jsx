import React from 'react';
import "react-multi-carousel/lib/styles.css";
import { sliderData } from './productData';
import Carousel from 'react-multi-carousel';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Slider = () => {
    console.log('slider jsx', sliderData)

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={true}
            showDots={true}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
        >
            {sliderData.map((e, index) => (
                <div key={index} className=''>
                    <img src={e.src} alt={e.title} />
                    <p>{e.title}</p>
                    <p>{e.price}</p>
                </div>
            ))}
        </Carousel>
    );
}

export default Slider;
