import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Checkout from "../Private/Checkout";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const {_id, name, price, description, minQuantity, quantity, img } = product;
  const [quantities, setQuantities] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://whispering-river-72827.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);


  const navigateToCheckout = id =>{
      navigate(`/checkout/${id}`);
  }

  const increase = () =>{
      if( quantities < quantity){
          setQuantities( prevCount => prevCount + 1)
      }
  }
  const decrease = () =>{
    if( quantities > minQuantity){
        setQuantities( prevCount => prevCount - 1)
    }
  }
  return (
    <div>
      <div className="flex justify-center">
        <div class="card w-96 bg-base-100 shadow-xl justify-self-start">
          <figure className='pl-5 pt-5'>
            <img src={img} alt="Shoes" />
          </figure>
          <div style={{ textAlign: "justify" }} class="card-body">
            <h2 class="card-title">{name}</h2>
            <h3>Price: ${price}</h3>
            <p>{description}</p>
            <p>Minimum Quantity: {minQuantity}</p>
            <p>Available Quantity: {quantity}</p>
            <div className="flex justify-center">

              <button type='button' onClick={decrease}
                style={{
                  fontSize: "25px",
                  background: "red",
                  fontWeight: "bold",
                  padding: "3px 25px",
                  borderRadius: "3px",
                  backgroundColor: "lightgray",
                }}>-</button>
              <input
                style={{
                  textAlign: "center",
                  backgroundColor: "#e9e9e9",
                  margin: "0 5px",
                }} type="number" value={quantities}/>
                <button onClick={increase}
                style={{
                  fontSize: "25px",
                  background: "red",
                  fontWeight: "bold",
                  padding: "3px 25px",
                  borderRadius: "3px",
                  backgroundColor: "lightgray",
                }}>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Checkout key={_id} product={product} quantities = {quantities}></Checkout>
      </div>
    </div>
  );
};

export default ProductDetail;
