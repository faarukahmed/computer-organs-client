import React from 'react';

const NewsLetter = () => {
    return (
        <div style={{backgroundColor: 'lightgray', padding: '40px 0px'}} className=' flex justify-center mb-10'>
            <div className='text-center' >
                <h1 className='text-5xl mb-2 font-bold'>Don't miss any updates</h1>
                <p>Get the latest content and best</p>
                <p>deals in your inbox every day</p>
                <input type="text" placeholder="Your Email" class="input input-bordered w-full max-w-xs mt-5" />
                <button class="btn btn-wide mt-3">Send</button>
            </div>
        </div>
    );
};

export default NewsLetter;