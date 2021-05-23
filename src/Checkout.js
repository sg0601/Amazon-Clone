import React from 'react'
import './Checkout.css'
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"; 

function Checkout() {
    // to fetch the value from the basket use usestate
    // pull the user from the store just like basket
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
{/* left checkout section */}
            <div className="checkout_left">
                {/* advertisment banner of checkout */}
            <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
            {/* user email on checkout page chaining to avoid error */}
        <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>
            {/* maping through every single item of the basket */}
            {/* Basket Items */}
            {/* Basket Items */}
            {/* Basket Items */}
            {/* Basket Items */}
            {/* Basket Items */}
            {basket.map(item => (
                // returning a checkout product
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

            </div>
            <div className="checkout_right">
                <Subtotal  />
            </div>
            
        </div>
    )
}

export default Checkout
