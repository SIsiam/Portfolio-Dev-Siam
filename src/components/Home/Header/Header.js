import React from 'react';
import FunFact from '../HeaderMain/FunFact/FunFact';
import HeaderMain from '../HeaderMain/HeaderMain/HeaderMain';
import HeaderService from '../HeaderMain/HeaderService/HeaderService';
import NavBar from '../NavBar/NavBar';
import './Header.css'
const Header = () => {
    return (
        <div className='header-area'>
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
            {/* <HeaderService />
            <FunFact /> */}
        </div>
        
    );
};

export default Header;