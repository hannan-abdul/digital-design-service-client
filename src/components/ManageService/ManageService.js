import React, { useEffect, useState } from 'react';
import SideBar from '../Dashboard/SideBar/SideBar';
import DeleteService from './DeleteService';

const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-spire-94243.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
            <SideBar/>
            <div className="container text-center mt-5 col-md-10 p-4 pr-5" style={{ position: "absolute", right: "-5%", top: "10%", backgroundColor: "#F4FDFB" }}>
                <h3>Manage Services</h3>
                <div>
                    {
                        services.map(service => <DeleteService 
                            service={service} 
                            key={service._id}
                            />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageService;