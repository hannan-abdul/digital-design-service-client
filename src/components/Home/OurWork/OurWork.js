import React from 'react';
import corporate from '../../../images/corporate-branding.jpg';
import app from '../../../images/app-development.jpg';
import business from '../../../images/business-development.jpg';
import OurWorkCard from '../OurWorkCard/OurWorkCard';

const portfolio = [
    {
        img: corporate,
        title: 'Corporate Branding',
        description: 'Curabitur aliquam justo ex, ac varius sem facilisis a. In vel felis eros.'
    },
    {
        img: app,
        title: 'App Development',
        description: 'Curabitur aliquam justo ex, ac varius sem facilisis a. In vel felis eros.'
    },
    {
        img: business,
        title: 'Business Development',
        description: 'Curabitur aliquam justo ex, ac varius sem facilisis a. In vel felis eros.'
    }
]

const OurWork = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="w-75 row text-center mt-5 pt-5">
                <h1>OUR PORTFOLIO</h1>
                {
                    portfolio.map(detail => <OurWorkCard detail={detail}/>)
                }
            </div>
        </div>
    );
};

export default OurWork;