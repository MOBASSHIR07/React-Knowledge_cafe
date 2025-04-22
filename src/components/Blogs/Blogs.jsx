import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks,handleMarkasread}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>
        {
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

        },[])
    return (
        <div className='md:w-2/3'>
            <h1 className="text-3xl mb-3">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks} handleMarkasread ={handleMarkasread} ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = { 
    handleBookmarks:PropTypes.func

}
export default Blogs;