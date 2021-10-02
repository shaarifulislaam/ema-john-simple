import React from 'react';

const ReviewItem = (props) => {
    const {name,  price , quantity , key} = props.product;
    const {removeHandler} = props;
    return (
        <div className="product">
       <div>
           <h4 className="product-name">{name}</h4>
            <p>Price : {price}</p>
            <p>Quantity : {quantity}</p>
            <button 
            onClick={()=>removeHandler(key)}
            className="regular-btn">Remove Item</button>
           </div>
        </div>
    );
};

export default ReviewItem;