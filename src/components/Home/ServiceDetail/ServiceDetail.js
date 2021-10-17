import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { serviceAction } from '../../../redux/action/customServiceAction';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    const dispatch = useDispatch();
    // console.log(service)
    const { name, description, photo, price, _id } = service;
    return (
        <div className="col-md-4 mt-5">
            <div className="card-fix">
                    <img style={{ width: '100px' }} src={photo} alt="img" />
                    <h3 style={{ color: 'black', }}>${price}</h3>
                    <h4>{name}</h4>
                    <p style={{ color: 'black' }}>{description}</p>
                    <div>
                        <Link to="/process-payment" onClick={() => dispatch(serviceAction(service))}><button className="btn-primary">Buy</button></Link>
                    </div>
            </div>
        </div>
    );
};

export default ServiceDetail;