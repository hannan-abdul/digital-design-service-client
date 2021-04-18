import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = (props) => {
    const { name, description, imageURL, price } = props.service;
    return (
        <div className="col-md-4 mt-5">
            <div className="card-fix">
                <Link to="/processPayment">
                    <img style={{ width: '100px' }} src={imageURL} alt="img" />
                    <h3 style={{color: 'black',}}>${price}</h3>
                    <h4>{name}</h4>
                    <p style={{color:'black'}}>{description}</p>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;