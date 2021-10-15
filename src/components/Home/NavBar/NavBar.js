import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const email = useSelector((state) => state.auth.userdetails.email);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" className="nav-link me-5 nav-fix">CREATIVE DESIGN</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link me-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5" href="#service">Services</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5" href="#contact">Contact Us</a>
                        </li>
                        {email ? <li>
                            <Link className="nav-link me-5">Logout</Link>
                        </li> : <li className="nav-item">
                            <Link className="nav-link me-5" to="/login">Login</Link>
                        </li>}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;