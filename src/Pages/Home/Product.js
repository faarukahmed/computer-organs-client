import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const {_id, img, name, description, minQuantity, quantity, price } = product;
  const navigate = useNavigate();


  const navigateToProductDetail = id =>{
      navigate(`/product/${id}`);

  }
  return (
    <div class="card w-96 bg-base-100 shadow-xl justify-self-start">
      <figure className='pl-5 pt-5'>  
        <img style={{width: '200px'}}
          src={img}
          alt="Shoes"
        />
      </figure>
      <div style={{textAlign: 'justify'}} class="card-body">
        <h2 class="card-title">{name}</h2>
        <h3 className="text-2xl text-bold">Price: ${price}</h3>
        <p>{description.slice(0, 200)}</p>
        <p>Minimum Quantity: {minQuantity}</p>
        <p>Available Quantity: {quantity}</p>
        <div class="card-actions justify-center">
          <button onClick={() => navigateToProductDetail(_id)} class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
