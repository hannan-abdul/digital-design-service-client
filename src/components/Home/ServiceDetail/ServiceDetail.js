import React from 'react';

const ServiceDetail = (props) => {
    const {name, description, imageURL, price} = props.service;
    return (
        <div className="col-md-4 mt-5">
            <img style={{width: '100px'}} src={imageURL} alt="img"/>
            <h6>${price}</h6>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default ServiceDetail;