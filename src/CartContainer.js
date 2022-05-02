import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './context';

const CartContainer = () => {
    const {cart, dispatch} = useGlobalContext();

    const calculateTotalPrice = () => {
        return cart.reduce(function(previousValue, currentValue){
            return (Number(previousValue) + Number(currentValue.price) * Number(currentValue.amount)).toFixed(2);
        },0)
    }
        if(cart.length === 0){
           return(
               <section className ='cart'>
                   <header>
                       <h2>your bag</h2>
                       <h4 className='empty-cart'>is currently empty</h4>
                   </header>
               </section>
           )
    }
           return(
               <section className='cart'>
                   <header>
                       <h2>your bag</h2>
                   </header>
                   <div>
                       {cart.map(item => {
                           return <CartItem key={item.id} {...item} />
                       })}
                   </div>
                   <footer>
                       <hr />
                       <div className='cart-total'>
                           <h4>
                               total <span>${calculateTotalPrice()}</span>
                           </h4>
                       </div>
                       <button
                       className='btn clear-btn'
                       onClick={()=>dispatch({type: 'CLEAR'})}
                       >
                           clear cart
                       </button>
                   </footer>
               </section>
           )
}

export default CartContainer;