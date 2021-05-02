import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faExternalLinkAlt, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import Aos from "aos";
import "aos/dist/aos.css";

import './HeaderService.css'
const HeaderService = () => {

    useEffect(() => {
        Aos.init({ duration: 1700 });

    }, [])






    return (
        <section class="services mt-5">
            <h2 class="title-style">What I Do</h2>
            <div className="row" data-aos="fade-up-left">

                <div className="my-card col-md">
                    <div class="box">
                        <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faDesktop} />
                        <h3 class="text">Web Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                        </p>
                    </div>
                </div>

                <div className="my-card col-md">
                    <div class="box">
                        <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faExternalLinkAlt} />
                        <h3 class="text">MERN Stack Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                        </p>
                    </div>

                </div>

                <div class="my-card col-md">
                    <div class="box">
                        <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faPencilRuler} />
                        <h3 class="text">Web Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                            </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeaderService;