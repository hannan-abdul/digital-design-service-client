import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus, faStar, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { dashboard_nav } from '../../../LocalData/LocalDataBase';
import { useDispatch, useSelector } from 'react-redux';

const SideBar = () => {
    const dispatch = useDispatch();
    const role = useSelector((state) => state.auth.userdetails.role);
    const filtered = dashboard_nav.filter(nav => nav.role.includes(role))
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {
                    filtered.map(item =>
                        <li>
                            <Link to={item.path} className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>{item.pathname}</span>
                            </Link>
                        </li>)
                }
                {/* <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/add-service" className="text-white">
                        <FontAwesomeIcon icon={faServicestack} /><span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white">
                        <FontAwesomeIcon icon={faServicestack} /> <span>Manage Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/managereviews" className="text-white">
                        <FontAwesomeIcon icon={faServicestack} /> <span>Manage Reviews</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white" >
                        <FontAwesomeIcon icon={faStar} /> <span>Add Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/processPayment" className="text-white" >
                        <FontAwesomeIcon icon={faMoneyBillWave} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Order List</span>
                    </Link>
                </li> */}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /><span>Back to Home</span></Link>
            </div>
        </div>
    );
};

export default SideBar;