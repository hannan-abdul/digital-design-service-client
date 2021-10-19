import React from 'react';
import SideBar from '../SideBar/SideBar';

const OrderList = () => {
    return (
        <section>
            <SideBar />
            <div className="container text-center mt-5 col-md-10 p-4 pr-5" style={{ position: "absolute", right: "-5%", top: "10%", backgroundColor: "#F4FDFB" }}>
                <h2>Order List Coming Soon....</h2>
            </div>
        </section>
    );
};

export default OrderList;