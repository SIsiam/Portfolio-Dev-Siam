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


            {/* main start  */}

{/* 

            <nav className={(isSticky || isCollapsed) ? "slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-1  fixed-top" : "slide out show navbar navbar-expand-sm navbar-light "}>
                <div className="container">
                    <Link className="" to="/">
                        <img src={logo} style={{ width: '120px' }} alt="" />
                    </Link>
                    <button onClick={
                        () => setCollapsed(!isCollapsed ? 'show' : null)} className="navbar-toggler d-lg-none mx-auto" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isCollapsed}`} id="collapsibleNavId">

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
                </div>
            </nav>

 */}














        </div>
    );
};

export default NavBar;