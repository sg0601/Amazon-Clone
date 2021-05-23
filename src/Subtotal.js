import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  // fetch the basket history
   const history = useHistory();
  // this dispatch has the info of items we add to our basket
  const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            {/* currency format is inbuilt react library to render the money */}
            {/* text that gets rendered onto the screen */}
            <CurrencyFormat


        renderText={(value) => (
          
          <>
            <p>
              {/* to update the numbe rof items in the subtotal */}
              
              Subtotal ({basket.length } items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        //  upto 2 deimal places
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* push the payment page into browser whenever button is clicked */}
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
