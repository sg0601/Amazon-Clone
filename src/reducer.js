
export const initialState = {
  basket: [],
  user: null
};
// reducer listen sto the actions of modifying the basket
// Selector
export const getBasketTotal = (basket) => 
//  reduce is a function that itteraes through the basket and tally amount
// item price is added to item amount &initial amount of basket=0
  basket?.reduce((amount, item) => item.price + amount, 0);

  

  
   const Reducer = (state, action) => {

       console.log(action)

    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,

          basket: [...state.basket, action.item],
        };
        // change the state of  basket
        // completly empty the basket
      
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }
//   find the index of item to remove
// match and find the first match and remove
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        // copy the basket to get a removed item basket
        let newBasket = [...state.basket];
            //   if there is any item in the basket
        if (index >= 0) {
            // delete 1 quantity of item and make rest the part of array
          newBasket.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
//   return the state and the new basket
        return {
          ...state,
          basket: newBasket
        }
      // SET_USER FOR DISPATCH
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  

export default Reducer;

  