import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-spire-94243.herokuapp.com/api/services/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container text-center mt-5" id="service">
            <h1>SERVICE WE PROVIDE</h1>
            <div className="row text-center justify-content-center">
                {
                    services.length === 0 && <div className="spinner-border text-primary" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                }
                {
                    services.map(service => <ServiceDetail
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;