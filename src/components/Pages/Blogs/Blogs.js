import React from 'react';
import Footer from '../../Footer/Footer';
import NavBar from '../../Home/NavBar/NavBar';
import Blog from '../Blog/Blog';
import BlogData from "../../../Data/BlogData";

const Blogs = () => {
    return (
        <div style={{ backgroundColor: '#080808ec', height: 'auto' }}>
            <NavBar></NavBar>
            <div className="container">

                <div className='row mt-5'>
                    {
                        BlogData.map(blog => <Blog blog={blog} key={blog.id} />)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;