import React, { useEffect, useState } from 'react';
import HomeProduct from './HomeProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([])
    useEffect( ()=>{
        fetch('https://whispering-river-72827.herokuapp.com/product')
        .then( res => res.json())
        .then( data => setProducts(data))
    }, [])
    return (
        <div className='flex justify-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {products.map( product => <HomeProduct
                    key = {product._id}
                    product = {product}
                ></HomeProduct>).slice(0, 3)}
            </div>
        </div>
    );
};

export default HomeProducts;