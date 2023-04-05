import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({singleCart,handleRemove}) => {
    console.log(singleCart)
    const {id,img,name,price,quantity}=singleCart;
    return (
        <div className='review'>
            <div className='item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='infoDiv'>
                <h1>{name}</h1>
                <p>Price : {price}</p>
                <p>Quantity : {quantity}</p>
            </div>
            <div>
                <button onClick={()=>handleRemove(id)} className='trashBtn'>
                <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
            </div>
        </div>
    );
};

export default ReviewItem;