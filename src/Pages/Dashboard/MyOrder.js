import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [myOrder, setMyOrder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if ( user ){
      fetch(`https://whispering-river-72827.herokuapp.com/order?email=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then( res => {
        console.log('res', res)
        if(res.status === 401 || res.status === 403){
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/')
        }
        return res.json()
      })
      .then( data => {
        setMyOrder(data)
      })
    }
  }, [user]);

  const handleDelete = (id) => {
    const proced = window.confirm("Are you sure?");
    if (proced) {
      const url = `https://whispering-river-72827.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "delete",
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myOrder.filter((order) => order._id !== id);
          setMyOrder(remaining);
        });
    }
  };
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>PRODUCT ID</th>
              <th>PRICE</th>
              <th>ORDERED</th>
              <th>TRANSACTIONID</th>
              <th>CANCEL</th>
              <th>PAYMENT STATUS</th>
            </tr>
          </thead>
          <tbody>
              {
                  myOrder.map( (order, index) => <tr>
                    <th>{index + 1}</th>
                    <th>{order._id}</th>
                    <td>{order.price}</td>
                    <td>{order.quantities}</td>
                    <td>{order.transactionId}</td>
                    <td>{!order.paid && <button style={{backgroundColor: 'lightgray', padding: '3px 8px', borderRadius: '0px 5px 0px 5px'}} onClick={() => handleDelete(order._id)}>cancel</button>}</td>
                    <td>
                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                    </div>}
                    </td>
                  </tr>)
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
