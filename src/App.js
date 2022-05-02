import React from 'react';
import {useGlobalContext} from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

function App() {
  const {loading} = useGlobalContext();
  if(loading){
    return(
      <div>
        <h1>Loading ...</h1>
      </div>
    )
  }
  return(
   <React.Fragment>
    <Navbar />
    <CartContainer />
   </React.Fragment>
  )
}
export default App;
