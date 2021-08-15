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

                <div className="my-card col-md-4 col-sm-6 col-lg">
                    <div class="box">
                        <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faDesktop} />
                        <h3 class="text">Web Development</h3>
                        <p>Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it</p>
                    </div>
                </div>

                <div className="my-card col-md-4 col-sm-6 col-lg">
                    <div class="box">
                        <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faExternalLinkAlt} />
                        <h3 class="text">MERN Stack Development</h3>
                        <p>Code is read more than it is written.Developer is the one who creates bugs defects mostly and working code rarely</p>
                    </div>

                </div>

                <div class="my-card  col-md-4 col-sm-6 col-lg">
                    <div class="box">
                        <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faPencilRuler} />
                        <h3 class="text">Web Design</h3>
                        <p>A successful website does three things: It attracts the right kinds of visitors.Guides them to the main services or product you offer.Collect Contact details for future ongoing relation.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeaderService;