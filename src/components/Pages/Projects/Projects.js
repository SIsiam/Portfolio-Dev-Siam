import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import Project from '../Project/Project';
import Photography from '../../../images/Capture3.PNG';
import carHouse from '../../../images/Capture1.PNG';
import Ticket from '../../../images/Capture2.PNG';
import IplTeam from '../../../images/Capture4.PNG';
import fancy from '../../../images/Capture6.PNG';
import EPL from '../../../images/Capture5.PNG';
import Footer from '../../Footer/Footer';
const Projects = () => {
    document.title="Developer Siam - Projects";

    const projects = [
        {
            id: 1,
            title: 'Photography Services Web App',
            picture: Photography,
            description: 'Book A service With Secure payment integration. See Your Order Status When Admin Accept. Admin and User Different System Setup',
            technologyUse: "Front-end web development with React, backend Use - Mongodb, Node, Express ",
            GithubLink: 'https://github.com/SIsiam/Photography-Services-Client',
            liveLink: 'https://photography-services1.web.app/',
        },
        {
            id: 2,
            title: 'Car House A Business app',
            picture: carHouse,
            description: `Buy Now Your Favourite Car's In Online With Money Back Guarantee In One Month. `,
            technologyUse: `Html, Css, Javascript, MERN Stack App, Bootstrap, Firebase Authentication, Heroku,`,
            GithubLink: 'https://github.com/SIsiam/car-house-client',
            liveLink: 'https://car-house-481ac.web.app/',
        },

        {
            id: 3,
            title: 'Railway Tickets Book',
            picture: Ticket,
            description: 'Railway Tickets Buy In Online. Select Your destination See Google Map Where To You Pick Up.',
            technologyUse: "HTML, CSS,JAVASCRIPT,bootstrap with React, ReactJs, Material ui, Google Authentication, Protected Route, Email Authentication, Google Map",
            GithubLink: 'https://github.com/SIsiam/railway-tickets-service',
            liveLink: 'https://railway-tickets-service.web.app/',
        },

        {
            id: 4,
            title: 'Ipl Team Maker',
            picture: IplTeam,
            description: 'Make A Ipl Team. Select your Favourite Player And Cost Team Amount',
            technologyUse: "Html, Css, Javascript, React, material ui & Front-End Package",
            GithubLink: 'https://github.com/SIsiam/ipl-team-maker',
            liveLink: 'https://kkr-team-maker.netlify.app/',
        },

        {
            id: 5,
            title: 'Fancy-Slider',
            picture: fancy,
            description: 'Search Picture and Select Your Favourite Picture. Make A Slider With Timing Function ..',
            technologyUse: "Vanila Javascript, bootstarp, Html & Css",
            GithubLink: 'https://github.com/SIsiam/fancy-slider',
            liveLink: 'https://sisiam.github.io/fancy-slider/',
        },
        {
            id: 6,
            title: 'English Premier League EPL',
            picture: EPL,
            description: 'English Premier Leauge EPL All Teams In 2021. Explore Your Favourite Team...',
            technologyUse: "HTML,CSS,JAVASCRIPT,bootstrap,React.js,Material ui,Font Awsome, API",
            GithubLink: 'https://github.com/SIsiam/premier-league-2021',
            liveLink: 'https://premier-league-2021.netlify.app/',
        },


    ]


    return (
        <div style={{ backgroundColor: '#080808ec', height: 'auto' }}>
            <NavBar></NavBar>
            <div className="container">
                <div className='row mt-5'>
                    {
                        projects.map(project => <Project project={project} key={project.id} />)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;