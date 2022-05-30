import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const {id} = useParams();

    const handleAddProduct = event =>{
        event.preventDefault();
        const products = {
            productId: id,
            img: event.target.img.value,
            name: event.target.name.value,
            price: event.target.price.value,
            description: event.target.description.value,
            minQuantity: event.target.minQuantity.value,
            quantity: event.target.quantity.value,
        }
        axios.post('https://whispering-river-72827.herokuapp.com/product', products)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Product Added');
                event.target.reset();
            }
        })
    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleAddProduct}>
                <input className='input input-bordered w-full max-w-xs mb-2' type="text" name="img" placeholder='Photo URL' required />
                <br />
                <input className='input input-bordered w-100 max-w-xs mb-2' type="text" name="name" placeholder='Name' required/>
                <br />
                <input className='input input-bordered w-full max-w-xs mb-2' type="number" name="price" placeholder='Price' required/>
                <br />
                <input className='input input-bordered w-full max-w-xs mb-2' type="text" name="description" placeholder='Description' required/>
                <br />
                <input className='input input-bordered w-full max-w-xs mb-2' type="number" name="minQuantity" placeholder='Minimum Quantity' required/>
                 <br />
                <input className='input input-bordered w-full max-w-xs mb-2' type="number" name="quantity" placeholder='Quantity' required/>
                 <br />
                <input className='btn btn-primary' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;