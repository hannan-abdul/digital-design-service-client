import React from 'react';

const Testimonial = (props) => {
    const {description, name, city, imageURL} = props.testimonial;
    return (
        <div className="col-md-6 text-center">
            <img src={imageURL} alt="img"/>
            <p>{description}</p>
            <h3>{name}</h3>
            <h6>{city}</h6>
        </div>
    );
};

export default Testimonial;