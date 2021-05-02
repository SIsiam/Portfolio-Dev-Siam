import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';

const Blog = () => {
    document.title="Developer Siam - Blog";
    return (
        <div style={{ backgroundColor: '#080808ec', height: '100vh', color: 'white' }}>

            <NavBar></NavBar>

            <div className="container">
                <h2 className="text-center p-3 mt-5">Coming Soon ...</h2>
            </div>
        </div>
    );
};

export default Blog;