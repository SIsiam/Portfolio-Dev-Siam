import React, { useEffect } from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import './About.css'
import Aos from "aos";
import "aos/dist/aos.css";


const About = () => {
    document.title="Developer Siam - About";
    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, [])

    return (
        <div style={{ height: '250vh', width: '100%', }} className="about">
            <NavBar />

            <section class="skills mt-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 my-skill p-5" data-aos="fade-right">
                            <h2 className="title">My skills</h2>

                            <h5 className="title-style" style={{ fontFamily: "Ubuntu,sans-serif" }}> - What I Know - </h5>
                            <div class="text mt-5">My creative skills & experiences.</div>
                            <p> Hi! I'm Shahidul Islam Siam, A Sharp Web Developer. My core skill is based on JavaScript And MERN stack.
                                I love to do most of the things Using JavaScript.I am available for any kind of job opportunity that suits my interests.</p>
                            <a href="https://drive.google.com/file/d/1u3UWADSdI3Yu9SdpxqOWUkbt3fDwp4qO/view?usp=sharing" target="_blank" className="More-skil" rel="noopener noreferrer" >Read more</a>

                            <div className="mt-5 p-3">
                                <h3 className='title-style mt-3'>Use Of Tools</h3>
                                <div className="technology">
                                    <span>Git</span>
                                    <span>Github</span>
                                    <span>NPM</span>
                                    <span>YARN</span>
                                    <span>Firebase</span>
                                    <span>Heroku</span>
                                    <span>Netlify</span>
                                    <span>VS Code</span>
                                    <span>Webstorm</span>
                                </div>
                            </div>

                        </div>




                        <div className=" col-md-6 skills-content p-5" data-aos="fade-left">
                            <div class="column right">

                                <div className="bars">
                                    <div className="info">
                                        <span>HTML</span>
                                        {/* <span>93%</span> */}
                                    </div>
                                    <div className="line html"></div>
                                </div>

                                <div className="bars">
                                    <div className="info">
                                        <span>CSS</span>
                                        {/* <span>85%</span> */}
                                    </div>
                                    <div className="line css"></div>
                                </div>

                                <div className="bars">
                                    <div class="info">
                                        <span>JavaScript</span>
                                        {/* <span>89%</span> */}
                                    </div>
                                    <div className="line js"></div>
                                </div>


                                <div className="bars">
                                    <div class="info">
                                        <span>jQuery</span>
                                        {/* <span>80%</span> */}
                                    </div>
                                    <div class="line jq"></div>
                                </div>


                                <div className="bars">
                                    <div className="info">
                                        <span>bootstrap</span>
                                        {/* <span>91%</span> */}
                                    </div>
                                    <div className="line bootstrap"></div>
                                </div>

                                <div className="bars">
                                    <div className="info">
                                        <span>Material Ui</span>
                                        {/* <span>85%</span> */}
                                    </div>
                                    <div className="line bootstrap"></div>
                                </div>


                                <div className="bars">
                                    <div className="info">
                                        <span>API</span>
                                        {/* <span>85%</span> */}
                                    </div>
                                    <div className="line bootstrap"></div>
                                </div>


                                <div className="bars">
                                    <div className="info">
                                        <span>MongoDB</span>
                                        {/* <span>70%</span> */}
                                    </div>
                                    <div className="line mongo"></div>
                                </div>

                                <div className="bars">
                                    <div className="info">
                                        <span>Express.Js</span>
                                        {/* <span>70%</span> */}
                                    </div>
                                    <div className="line express"></div>
                                </div>

                                <div className="bars">
                                    <div className="info">
                                        <span>React.Js</span>
                                        {/* <span>80%</span> */}
                                    </div>
                                    <div className="line react"></div>
                                </div>


                                <div className="bars">
                                    <div class="info">
                                        <span>Node.Js</span>
                                        {/* <span>77%</span> */}
                                    </div>
                                    <div className="line node"></div>
                                </div>


                                <div className="bars">
                                    <div class="info">
                                        <span>Python</span>
                                        {/* <span>55%</span> */}
                                    </div>
                                    <div className="line py"></div>
                                </div>

                                <div className="bars">
                                    <div class="info">
                                        <span> C </span>
                                        {/* <span>55%</span> */}
                                    </div>
                                    <div className="line py"></div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>

    );
};

export default About;