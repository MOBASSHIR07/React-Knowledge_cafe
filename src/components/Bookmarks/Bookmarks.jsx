import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingtime}) => {
    
    return (
        <>
       <div className='md:w-1/3 bg-gray-300'>
       <div>
        <h3 className="text-3xl text-center bg-green-200">Reading Time : {readingtime}</h3>
       </div>
       <div className='  bg-slate-200 text-center p-2'>
            <h2 className='text-3xl '>Bookmarked Blog:{bookmarks.length}</h2>
        </div>
        <div>
            {
                bookmarks.map(bookmark =><Bookmark bookmark ={bookmark}></Bookmark>)
            }
        </div>
       </div>
        
    </>
    );
};

export default Bookmarks;