import React from 'react';
import './OurWorkCard.css';

const OurWorkCard = ({detail}) => {
    return (
        <div className="col-md-4 work-card">
            <img className="work-img" style={{width: '80%'}} src={detail.img} alt=""/>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
        </div>
    );
};

export default OurWorkCard;