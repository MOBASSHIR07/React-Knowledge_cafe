import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
       <h3 className='text-2xl font-bold bg-slate-200 p-4 m-4 rounded-xl'>{title}</h3>
        </div>
    );
};

export default Bookmark;