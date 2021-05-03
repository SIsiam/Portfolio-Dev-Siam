import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Project.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from 'react-bootstrap';


const Project = ({ project }) => {

    console.log(project);
    const { title, description, picture, picture2, picture3, liveLink, GithubLink, technologyUse } = project

    useEffect(() => {
        Aos.init({ duration: 2200 });

    }, [])

    return (

        <div className="col-md-6" data-aos="zoom-in-left">
            <div className="card-deck m-3 text-light">
                <div className="card">
                    <div className="card-box">

                        <h3 className="card-title mb-3">{title}</h3>
                        <Carousel  controls={false} fade={true}  >
                            <Carousel.Item interval={1200}>

                                <img
                                    className="d-block w-100 card-img" style={{ height: '230px', borderRadius: '10px' }}
                                    src={picture}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1200}>

                                <img
                                    className="d-block w-100" style={{ height: '230px', borderRadius: '10px' }}
                                    src={picture2}
                                    alt="Third slide"
                                />

                            </Carousel.Item>

                            <Carousel.Item interval={1200}>
                                <img
                                    className="d-block w-100 card-img" style={{ height: '230px', borderRadius: '10px' }}
                                    src={picture3}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                        {/* <img src={picture} className="card-img-top w-100" style={{ height: '230px', borderRadius: '10px' }} alt="" /> */}
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