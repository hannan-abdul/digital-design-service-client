import React from 'react';
import headphone from '../../../images/blanded-image.jpg';

const FeaturedService = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img style={{width: '90%'}} src={headphone} alt=""/>
                </div>
                <div className="col-md-6">
                    <h1>WHY WE ARE DIFFERENT</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make point of using a type specimen book.</p>
                    <button className="btn btn-primary">LEARN MORE</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;