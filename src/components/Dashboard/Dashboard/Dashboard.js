import React from 'react';
import ManageService from '../../ManageService/ManageService';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    return (
        <section>
            <div className="row">
                <div>
                    <SideBar></SideBar>
                    <ManageService></ManageService>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;