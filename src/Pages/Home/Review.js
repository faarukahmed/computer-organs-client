import React from 'react';
import iconstar from '../../assets/images/iconstar.png'

const Review = ({review}) => {
    const {name, rating, text} = review;
    return (
        <div className='p-5 card w-96 bg-base-100 shadow-xl justify-self-start'>
            <div className='flex'>
                <span className='font-bold mr-2'>{name}</span>
                <div className='flex'>
                    <span>{rating}</span>
                    <img className='w-4 h-4 mt-1' src={iconstar} alt="" />
                </div>
            </div>
                <p>{text}</p>
        </div>
    );
};

export default Review;