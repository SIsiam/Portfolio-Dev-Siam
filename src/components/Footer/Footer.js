import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="text-light text-center" style={{ fontFamily: 'Poppins,sans-serif', }}>
            <footer>
                <div> Created By <span> <a href="https://github.com/sisiam" target="_blank" rel="noopener noreferrer">Shahidul Islam</a></span>  | <span>  <FontAwesomeIcon style={{ fontSize: '18px' }} icon={faCopyright} /> </span>
                    {(new Date()).getFullYear()} All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;