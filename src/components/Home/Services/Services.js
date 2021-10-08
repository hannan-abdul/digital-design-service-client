import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-spire-94243.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container text-center mt-5">
            <h1>SERVICE WE PROVIDE</h1>
            <div className="row">
                {
                    services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </div>
    );
};

export default Services;