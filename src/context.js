import React, {useContext,useReducer,useEffect} from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();
const initialState = {
    cart: cartItems,
    loading: true
}

const AppProvider = ({children}) => {
   const [state,dispatch] = useReducer(
       reducer,
       initialState
   )
   useEffect(()=>{
       fetch(url)
         .then(response => response.json())
         .then(data => dispatch({type:'FETCH', payload:data}))
   },[]);

   return(
       <AppContext.Provider value={{
           cart: state.cart, loading: state.loading, dispatch:dispatch
       }}>
           {children}
       </AppContext.Provider>
   )
}

const useGlobalContext = () => {
     return useContext(AppContext)
}

export {useGlobalContext,AppProvider,AppContext}