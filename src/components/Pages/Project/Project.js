import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Project.css'
import Aos from "aos";
import "aos/dist/aos.css";


const Project = ({ project }) => {

    console.log(project);
    const { title, description, picture, liveLink, GithubLink, technologyUse } = project

    useEffect(() => {
        Aos.init({ duration: 2200 });

    }, [])

    return (

        <div className="col-md-6" data-aos="zoom-in-left">
            <div className="card-deck m-3 text-light">
                <div className="card">
                    <div className="card-box">

                    <h3 className="card-title mb-3">{title}</h3>
                    <img src={picture} className="card-img-top w-100" style={{ height: '230px', borderRadius: '10px' }} alt="" />
                    <div class="card-body">
                        <p className="card-text">{description}</p>
                        <div className="mb-4">
                            <h4>Technology use : </h4>
                            {technologyUse}
                        </div>

                        <div className='d-flex justify-content-between '>
                            <a className="text-light" style={{ fontSize: '20px', textDecoration: 'none' }} href={liveLink} rel="noopener noreferrer" target="_blank">
                                Live Preview <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                            <a className="text-light" style={{ fontSize: '23px', textDecoration: 'none' }} rel="noopener noreferrer" href={GithubLink} target="_blank">
                                Code <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                        </div>
                    </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Project;