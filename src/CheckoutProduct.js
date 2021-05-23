import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
// same props as in product page

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    // fetch the basket  state to diaspatch
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} />
            {/* paragraps for all the props passed */}

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className="checkoutProduct_price">

{/* for bolding down the text */}                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    // remove from basket button
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct