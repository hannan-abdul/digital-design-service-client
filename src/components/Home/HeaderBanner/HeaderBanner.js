import React from 'react';
import banner from '../../../images/banner.jpg';
import './HeaderBanner.css';

const HeaderBanner = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex align-items-center background-yellow">
            <div className="col-md-6 p-5">
                <p>WE ARE A FULL SERVICE</p>
                <h1> <span style={{color: 'white'}}> CREATIVE </span><br/> <span className="text-color"> DESIGN AGENCY</span></h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal.</p>
                <button className="btn btn-primary">LEARN MORE</button>
            </div>
            <div className="col-md-6 banner-fix">
                <img src={banner} alt="banner" className="img-fluid banner-img"/>
            </div>
        </div>
        </div>
    );
};

export default HeaderBanner;