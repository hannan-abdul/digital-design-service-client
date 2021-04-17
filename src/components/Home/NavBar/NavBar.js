import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/addService">add service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="nav-link me-5">{loggedInUser.name}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;