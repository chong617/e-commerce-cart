import React from 'react';
import { useGlobalContext } from './context';

const CartItem = (item) => {
    const {dispatch} = useGlobalContext();

    const handleIncrement = (item) => {
        dispatch({type: 'INCREMENT', id: item.id})
    }

    const handleDecrement = (item) => {
        dispatch({type: 'DECREMENT', id: item.id});
        if(item.amount == 1){
            dispatch({type: 'REMOVE', id: item.id})
        }
    }

    const handleRemove = (item) => {
        dispatch({type: 'REMOVE', id: item.id})
    }
    return(
        <article className='cart-item'>
         <img src={item.img} alt={item.title}/>
         <div>
             <h4>{item.title}</h4>
             <h4 className='item-price'>{item.price}</h4>
             <button className='remove-btn' onClick={()=> handleRemove(item)}>remove</button>
         </div>
         <div>
             <button className='amount-btn' onClick={() => handleIncrement(item)}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path>
            </svg>
             </button>
             <p className='amount'>{item.amount}</p>
             <button className='amount-btn' onClick={() =>handleDecrement(item)}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z">
                            </path>
                        </svg>
             </button>
         </div>
        </article>
    )
}

export default CartItem;