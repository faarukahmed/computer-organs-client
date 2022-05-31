import React, { useEffect, useState } from 'react';

const AllOrder = () => {
    const [orders, setOrders] = useState([])

    useEffect( ()=>{
        fetch('https://whispering-river-72827.herokuapp.com/order', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
        })
        .then( res => res.json())
        .then( data => {
            setOrders(data)
        })
    }, [])
    const handleDelete = id =>{
        const proced = window.confirm('Are you sure?');
        if(proced){
            const url = `https://whispering-river-72827.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'delete'
            })
            .then( res => res.json())
            .then( data =>{
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining)
            })
        }
    }
    return (
        <div className='flex justify-center'>
        <div className="mt-10">
            {
                orders.map( order => <div key={order._id}>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <img className="w-24 my-5" src={order.img} alt="" />
                            <h5 className='mx-5'>{order.product}</h5>
                        </div>
                        <h5><button onClick={() => handleDelete(order._id)} className='btn btn-primary'>X</button></h5>
                    </div>
                </div>)
            }
        </div>
    </div>
    );
};

export default AllOrder;