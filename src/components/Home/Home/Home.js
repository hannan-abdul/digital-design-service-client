import React from 'react';
import Footer from '../../Footer/Footer';
import ContactUs from '../ContactUs/ContactUs';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import OurWork from '../OurWork/OurWork';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <OurWork/>
            <Services></Services>
            <FeaturedService/>
            <Testimonials/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;