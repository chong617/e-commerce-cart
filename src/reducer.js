const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH':
          return {loading: false, cart: action.payload}
        case 'INCREMENT':
          return {loading: false, 
                   cart: state.cart.map((item) => {
                     if(item.id == action.id){
                        return {...item, amount: item.amount+1}
                     }else{
                        return item;
                     }
                   })}
          case 'DECREMENT':
            return {
                loading: false,
                cart: state.cart.map((item) => {
                      if(item.id == action.id){
                        return {...item, amount: item.amount -1}
                      }else{
                        return item;
                      }
                })
            }
            case 'REMOVE':
              return {
                loading: false,
                cart: state.cart.filter(item => item.id !== action.id)
              }
            case 'CLEAR':
               return {
                 loading: false,
                 cart: [],
               }
            default:
               return state;
    }
}

export default reducer;