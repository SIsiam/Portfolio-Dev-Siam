import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from "../../../images/coder.png";


const NavBar = () => {

    return (
        <div className='container'>

            <nav className="navbar navbar-expand">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className="rounded " width="100px" height="70px" alt="" />
                    </Link>

                    <ul>
                        <div class="navbar" id="myTopnav">
                            <li className="nav-item my-nav">
                                <Link to="/" className="nav-link my-nav-link">
                                    <button className="btn btn btn-rounded text-light"> Home </button>
                                </Link>
                            </li>

                            <li className="nav-item my-nav">
                                <Link to="/projects" className="nav-link my-nav-link">
                                    <button className="btn text-light"> Projects </button>
                                </Link>
                            </li>


                            <li className="nav-item my-nav">
                                <Link to="/blog" className="nav-link my-nav-link ">
                                    <button className="btn text-light"> Blog </button>
                                </Link>
                            </li>

                            <li className="nav-item my-nav">
                                <Link to="/about" className="nav-link my-nav-link">
                                    <button className="btn text-light"> About </button>
                                </Link>
                            </li>

                            <li className="nav-item my-nav">
                                <Link to="/contact" className="nav-link my-nav-link">
                                    <button className="btn text-light"> Contact </button>
                                </Link>
                            </li>

                        </div>
                    </ul>

                </div>
            </nav>

        </div>
    );
};

export default NavBar;