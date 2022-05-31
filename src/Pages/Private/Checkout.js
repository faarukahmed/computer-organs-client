import React, { useEffect } from 'react';
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
            img: img,
            quantities: quantities,
        }
    
            fetch('https://whispering-river-72827.herokuapp.com/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(order)
            })
            .then(res => res.json())
            .then( data => {
                toast('Product Added')
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