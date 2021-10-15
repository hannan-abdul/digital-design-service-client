import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterColum from './FooterColum';
import ScrollTop from '../Helper/ScrollTop';

const Footer = () => {
    const ourAddress = [
        {name: "California - 14222 Dallas" , link: "//google.com/map"},
        {name: "Buffalo" , link: "//google.com/map"},
       
    ]
    const portfolio = [
        {name: "UX Research" , link: "/research"},
        {name: "Brand Identity" , link: "/brand"},
        {name: "Web Development" , link: "/development"},
        {name: "Photography" , link: "/photography"},
        {name: "Web Design" , link: "/design"},
        {name: "Business Strategy" , link: "/strategy"}
    ]
    const services = [
        {name: "UX Research" , link: "/research"},
        {name: "Brand Identity" , link: "/brand"},
        {name: "Web Development" , link: "/development"},
        {name: "Photography" , link: "/photography"},
        {name: "Web Design" , link: "/design"},
        {name: "Business Strategy" , link: "/strategy"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterColum key={1} menuTitle="Services" menuItems={services}/>
                    <FooterColum key={2} menuTitle="Portfolio" menuItems={portfolio}/>
                    <FooterColum key={3} menuTitle="Contact Us" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+8801722445566</button>
                        </div>
                    </FooterColum>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
            <ScrollTop/>
        </footer>
        
    );
};

export default Footer;