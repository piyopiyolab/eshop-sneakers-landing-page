import React from 'react';
import "react-multi-carousel/lib/styles.css";
import { testimonialsData } from '../../assets/data';
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Testimonials() {
    return (
        <section className="container-c">
            <h4 className='font-bold text-3xl text-center before:align-middle before:inline-block before:w-[1.5rem] before:h-[0.1rem] before:mr-2 before:bg-black  
after:align-middle after:inline-block after:w-[1.5rem] after:h-[0.1rem] after:ml-2 after:bg-black'>Client testimonials</h4>

            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {testimonialsData.map((e, i) => (
                    <div key={i} className="p-4">
                        <h5 className="font-semibold text-xl">{e.name}</h5>
                        <p>{e.comment}</p>
                    </div>
                ))}
            </Carousel>
        </section>
    );
}

export default Testimonials;
