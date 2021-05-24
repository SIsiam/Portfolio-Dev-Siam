import React, { useEffect } from 'react';
import './HeaderMain.css';
import picture from '../../../../images/Siam.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import HeaderService from '../HeaderService/HeaderService';
import FunFact from '../FunFact/FunFact';
import Aos from "aos";
import "aos/dist/aos.css";
library.add(fab, faCheckSquare, faCoffee)


const HeaderMain = () => {

    useEffect(() => {
        Aos.init({ duration: 1800 });

    }, [])

    return (

        <div className='container' style={{overflow:'hidden'}}>

            <div className="row mt-2" >
                <div className="col-md-6 col-sm-6 col-lg-6" data-aos="fade-right">
                    <img className='image-setting img-fluid' src={picture} alt="Siam" />
                    <div className="text-white d-flex mt-5 icon-settings">
                        <li className='icon-color'>
                            <a href="https://github.com/sisiam/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={{ fontSize: '40px' }} icon={['fab', 'github']} /> </a>
                        </li>


                        <li className='icon-color'>
                            <a href="https://www.linkedin.com/in/shahidul-islam-siam/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={{ fontSize: '40px' }} icon={['fab', 'linkedin']} /> </a>
                        </li>

                        <li className='icon-color'>
                            <a href="https://www.facebook.com/dev.siam1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={{ fontSize: '40px' }} icon={['fab', 'facebook']} /> </a>
                        </li>

                        <li className='icon-color'>
                            <a href="https://medium.com/@shahidulmd392" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={{ fontSize: '40px' }} icon={['fab', 'medium-m']} /> </a>
                        </li>

                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-6" data-aos="fade-left">
                    <div className='text-light offset-md-1 resume-button'>

                        <Typical className="skill-container"
                            steps={[
                                "React Developer", 3200,
                                'Web Developer', 3000,
                                'MERN Stack Developer', 3000,
                                'Full Stack Developer', 3000,
                                'Motion Designer', 3000
                            ]}
                            loop={Infinity}
                            wrapper="p" />

                        <div className="">
                            <h1 className='name-design'>Shahidul Islam Siam</h1>
                            <h3 style={{ 'color': 'rgb(233, 66, 248)' }}>Front End Developer</h3>
                            <p className='description pb-3'>Interested in working together. Feel free to contact me for any project or collaboration..</p>
                        </div>

                        <div className="">
                            <a href="https://drive.google.com/file/d/1u3UWADSdI3Yu9SdpxqOWUkbt3fDwp4qO/view?usp=sharing"
                                target="_blank" rel="noopener noreferrer" >
                                <button className="btn btn-outline-info home-button">
                                    Download RESUME
                            </button>
                            </a>
                            <Link to="/contact">
                                <button type="button" className="btn btn-outline-secondary text-light home-button">
                                    Contact With Me
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-5">
                <HeaderService />
            </div>

            <div className="mt-5">
                <FunFact />
            </div>
        </div>

    );

}

export default HeaderMain;