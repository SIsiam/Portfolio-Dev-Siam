import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import Project from '../Project/Project';
import ProjectData from "../../../Data/ProjectData";
import Footer from '../../Footer/Footer';

const Projects = () => {
    document.title = "Developer Siam - Projects";

    return (
        <div style={{ backgroundColor: '#080808ec', height: 'auto' }}>
            <NavBar></NavBar>
            <div className="container">

                <div className='row mt-5'>
                    {
                        ProjectData.map(project => <Project project={project} key={project.id} />)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;