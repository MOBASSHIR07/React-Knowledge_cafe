import React from 'react';
import PropTypes from 'prop-types';
import { BsBookmarkStarFill } from "react-icons/bs";



const Blog = ({blog,handleBookmarks,handleMarkasread}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className="w-full h-64 object-cover rounded-lg mb-5" src={cover} alt="" />
            <div className='flex justify-between'> 
                <div className='flex items-center gap-2 mb-2'>
                   <img className='w-16 rounded-full' src= {author_img}alt="" />
                   <div className='ml-6'>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>

                   </div>
                </div>
                <div className=' flex items-center'>
                  <span>{reading_time} min read</span>
                  <button onClick={() =>handleBookmarks(blog)} className='ml-2'><BsBookmarkStarFill /></button>
                </div>
            </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{hashtags.map((hash,index) => <span key={index}><a href="">{hash}</a> </span>)}</p>

         <button onClick={()=>handleMarkasread(reading_time)} className='text-purple-400 font-bold underline'>Mark As Read</button>   
        </div>
    );
};
Blog.propTypes = {blogs:PropTypes.object.isRequired,
    handleBookmarks:PropTypes.func
}
export default Blog;