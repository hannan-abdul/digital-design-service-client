import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeaderBanner></HeaderBanner>
        </div>
    );
};

export default Header;