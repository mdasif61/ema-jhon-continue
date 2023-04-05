import React from 'react';
import Cart from './Cart/Cart';
import { useState } from 'react';
import ReviewItem from './ReviewItem';
import {useLoaderData,Link} from 'react-router-dom';
import './Order.css';
import { removeFromDb } from '../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    const[cart,setCart]=useState(savedCart)

    const handleRemove=(id)=>{
        const remain=cart.filter(pd=>pd.id!==id);
        setCart(remain)
        removeFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className='reviewDiv'>
                {
                    cart.map(singleCart=><ReviewItem
                    key={singleCart.id}
                    singleCart={singleCart}
                    handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link>
                        Procced Checkout
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;