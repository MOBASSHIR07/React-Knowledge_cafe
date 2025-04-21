import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className=' w-11/12 flex justify-between items-center p-4 mx-4 border-b-2'>
              <h1 className='text-4xl font-bold'>Knowledge Cafe </h1>
              <img src={profile} alt="" />
        </div>
    );
};

export default Header;