import React, { useEffect, useState } from 'react';

const Manage = () => {
    const [products, setProducts] = useState([])
    useEffect( ()=>{
        fetch('https://whispering-river-72827.herokuapp.com/product')
        .then( res => res.json())
        .then( data => setProducts(data))
    }, [])


    const handleDelete = id =>{
        const proced = window.confirm('Are you sure?');
        if(proced){
            const url = `https://whispering-river-72827.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'delete'
            })
            .then( res => res.json())
            .then( data =>{
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining)
            })
        }
    }
    return (
        <div className='flex justify-center'>
            <div className="mt-10">
                {
                    products.map( product => <div key={product._id}>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <img className="w-24 my-5" src={product.img} alt="" />
                                <h5 className='mx-5'>{product.name}</h5>
                            </div>
                            <h5><button onClick={() => handleDelete(product._id)} className='btn btn-primary'>X</button></h5>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Manage;