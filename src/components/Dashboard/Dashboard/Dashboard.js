import React from 'react';
import AddReview from '../../AddReview/AddReview';
import AddService from '../../AddService/AddService';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    return (
        <section>
            <div className="row">
                <div>
                    <SideBar></SideBar>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;