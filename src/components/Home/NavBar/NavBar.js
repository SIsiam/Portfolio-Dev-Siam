import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from "../../../images/coder.png";


const NavBar = () => {

    // const [isSticky, setSticky] = useState(false);
    // const [isCollapsed, setCollapsed] = useState(null);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrolly > 10) {
    //             setSticky(true)
    //         } else {
    //             setSticky(false)
    //         }
    //     })
    // }, []);
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light my-nav mb-5">
                <div className="container-fluid">

                    <a class="navbar-brand text-light p-3" href="/">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} className="rounded " width="100px" height="70px" alt="" />
                        </Link>
                    </a>
                    <button className="navbar-toggler bg-warning text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container" id="navbarScroll">
                        <ul className="navbar-nav ms-auto navbar-nav-scroll">

                            <li className="nav-item my-nav">
                                <Link to="/" className="nav-link">
                                    <button className="btn btn btn-rounded text-light my-nav-link"> Home </button>
                                </Link>
                            </li>
                            <li className="nav-item my-nav">
                                <Link to="/projects" className="nav-link ">
                                    <button className="btn text-light my-nav-link"> Projects </button>
                                </Link>
                            </li>

                            <li className="nav-item my-nav">
                                <Link to="/blogs" className="nav-link ">
                                    <button className="btn text-light my-nav-link"> Blog </button>
                                </Link>
                            </li>
                            <li className="nav-item my-nav">
                                <Link to="/about" className="nav-link">
                                    <button className="btn text-light my-nav-link "> About </button>
                                </Link>
                            </li>
                            <li className="nav-item my-nav">
                                <Link to="/contact" className="nav-link ">
                                    <button className="btn text-light my-nav-link"> Contact </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;