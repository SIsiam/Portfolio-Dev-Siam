import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeart, faStar, faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons';
import './FunFact.css';


const FunFact = () => {

    return (
        <section class="services mt-5 p-3">
            <h2 class="title-style">Fun Fact</h2>
            <div class="row">

                <div class="fun-card col-md col-sm-4 col-lg">
                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faHeart} />
                    <div className="mt-3"></div>
                    <h5>Happy Clients</h5>
                    <h2>100</h2>
                </div>

                <div class="fun-card col-md col-sm-4 col-lg">
                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faClock} />
                    <div className="mt-3">
                        <h5>Working Hours</h5>
                        <h2>6,800</h2>
                    </div>
                </div>

                <div class="fun-card col-md col-sm-4 col-lg">
                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faStar} />
                    <div className="mt-3">
                        <h5>Award's Won</h5>
                        <h2>34</h2>
                    </div>
                </div>

                <div class="fun-card col-md col-sm-4 col-lg">
                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faPrescriptionBottle} />
                    <div className="mt-3">
                        <h5>Coffee Consumed</h5>
                        <h2>197</h2>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default FunFact;