import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/reviews')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className="container text-center mt-5 pt-5">
            <h1>FROM OUR CLIENTS</h1>
            <div className="row">
                {
                    testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;