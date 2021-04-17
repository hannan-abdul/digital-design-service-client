import React from 'react';

const OurWorkCard = ({detail}) => {
    return (
        <div className="col-md-4">
            <img style={{width: '80%'}} src={detail.img} alt=""/>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
        </div>
    );
};

export default OurWorkCard;