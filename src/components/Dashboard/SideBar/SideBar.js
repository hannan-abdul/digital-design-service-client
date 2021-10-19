import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SideBar.css';
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
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /><span>Back to Home</span></Link>
            </div>
        </div>
    );
};

export default SideBar;