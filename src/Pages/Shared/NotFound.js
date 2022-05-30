import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <div className='mt-20'>
                <h1 style={{color: 'red', fontSize: '50px', fontWeight: 'bold'}}>404</h1>
                <h1 style={{color: '#40739e', marginBottom: '40px'}}>OPPS! PAGE NOT FOUND</h1>
                <button className='btn btn-primary'><Link to='/'>Go To Home</Link></button>
            </div>
        </div>
    );
};

export default NotFound;