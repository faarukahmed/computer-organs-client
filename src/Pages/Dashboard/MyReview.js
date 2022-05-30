import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth)
    const handleAddProduct = event =>{
        event.preventDefault();
        const reviews = {
            name: user?.displayName,
            rating: event.target.rating.value,
            text: event.target.text.value, 
        }
        axios.post('https://whispering-river-72827.herokuapp.com/review', reviews)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Review Added');
                event.target.reset();
            }
        })
    }
    return (
        <div>
            <h1 className='text-center text-2xl mb-5'>Add Your Review (FeedBack)</h1>
            <div className='flex justify-center'>
            <form onSubmit={handleAddProduct}>
                <input className='input input-bordered w-full max-w-xs mb-2' type="text" value={user?.displayName} placeholder='Name' required/>
                <br />
                <input className='input input-bordered w-full max-w-xs mb-2' type="number" name="rating" placeholder='Rating' required/>
                 <br />
                 <textarea className='textarea input-bordered w-full max-w-md' name='text' placeholder='Your Review' rows={4}></textarea>
                <input className='btn btn-primary' type="submit" value="Submit Review" />
            </form>
        </div>
        </div>
    );
};

export default MyReview;