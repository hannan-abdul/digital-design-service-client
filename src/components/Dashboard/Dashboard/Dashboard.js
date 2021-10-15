import React from 'react';
import ManageService from '../../Dashboard/ManageService/ManageService';
import SideBar from '../SideBar/SideBar';


const Dashboard = () => {
    return (
        <section>
            <div className="row">
                <div>
                    <SideBar/>
                    <ManageService/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;