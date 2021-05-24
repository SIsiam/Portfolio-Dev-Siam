import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Blog = ({ blog }) => {
    document.title = "Developer Siam - Blog";
    const {  description, picture, liveLink } = blog

    return (
        <div className="col-md-6 col-lg-6 col-sm-4">
            <a className="text-light" style={{ fontSize: '20px', textDecoration: 'none' }} href={liveLink} rel="noopener noreferrer" target="_blank">
                <div className="card-deck m-3 text-light">
                    <div className="card">
                        <div className="card-box">
                            <img
                                className="d-block w-100 card-img img-fluid"
                                src={picture}
                                alt="blog Pictures"
                            />
                            <div class="card-body">
                                <p className="card-text">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Blog;