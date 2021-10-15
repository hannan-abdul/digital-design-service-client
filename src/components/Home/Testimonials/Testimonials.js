import React, { useEffect, useState } from 'react';
// import Testimonial from '../Testimonial/Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Testimonials.css";
// swiper slider 
import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';

const Testimonials = () => {
    SwiperCore.use([Pagination, Autoplay]);

    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/api/reviews/allreviews')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className="container mx-auto mt-16 text-center div-fix">
            <h1 className="mt-1.5">FROM OUR CLIENTS</h1>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },

                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },

                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }

                }}
                autoplay={true}
                pagination={{
                    "clickable": true
                }} className="mySwiper">
                {
                    testimonials.length === 0 && <div className="spinner-border text-primary" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                }
                {
                    testimonials.map(testimonial =>
                        <SwiperSlide key={testimonial._id}>
                            <div className="group w-90 mt-10 mb-16 testimonial-card cursor-pointer bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
                                <img className="mt-5" src={testimonial.photo} alt="img" />
                                <p>{testimonial.description}</p>
                                <h3>{testimonial.name}</h3>
                                <h6>{testimonial.city}</h6>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;