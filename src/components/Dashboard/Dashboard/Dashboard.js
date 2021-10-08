import React from 'react';
import ManageReviews from '../../ManageReviews/ManageReviews';
import ManageService from '../../ManageService/ManageService';
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