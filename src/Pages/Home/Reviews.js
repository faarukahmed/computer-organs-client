import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect( ()=>{
        fetch('https://whispering-river-72827.herokuapp.com/review')
        .then( res => res.json())
        .then( data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <h1 className='text-5xl font-bold text-center my-12'>Customer Reviews</h1>
             <div className='flex justify-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {reviews.map( review => <Review
                    review = {review}
                ></Review>)}
            </div>
        </div>
        </div>
    );
};

export default Reviews;