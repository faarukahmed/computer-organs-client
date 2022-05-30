import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Checkout = ({product, quantities}) => {
  const {_id, name, price, description, minQuantity, quantity, img } = product;
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            product: product.name,
            address: event.target.address.value,
            phone: event.target.phone.value,
            price: price,
            quantities: quantities,
        }
        axios.post('https://whispering-river-72827.herokuapp.com/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }
    return (
        <div>
            <h2>Please Order: {product.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='input input-bordered w-full max-w-xs mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br /> 
                <input className='input input-bordered w-full max-w-xs mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='input input-bordered w-full max-w-xs mb-2' type="text" value={product.name} name="product" placeholder='product' required />
                <br />
                <input className='input input-bordered w-full max-w-xs mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='input input-bordered w-full max-w-xs mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;