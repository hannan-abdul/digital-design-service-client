import React from 'react';
import ManageService from '../../ManageService/ManageService';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import OurWork from '../OurWork/OurWork';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurWork></OurWork>
            <ManageService></ManageService>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;