import React,{ useState, useEffect } from 'react'
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    // use stripe and its elements
    const stripe = useStripe();
    const elements = useElements(); 
    // creating  states to report an error or disable a button
    const [error,setError]=useStateValue(null)
    const [disabled,setDisabled]=useStateValue(true)
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const handleSubmit=async (event)=>{
        // do the stripe stuff
        // Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread
        // allowed to click buy button only once
        event.preventDefault();
        setProcessing(true);
    }
    const handleChange=event=>{
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }
    // reusing all functionality from checout.js
    
    return (
        <div className='payment'>
            <div className='payment_container'>
                {/* 1 payment section for delivery Address */}
                <h1>
                    {/* checkout with number of items */}
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
            <div className='payment_section'>
                <div className='payment_title'>
                <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                </div>
                


            </div>

            
                {/* 2nd payment section for review items */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                        </div>
                        {/* this is where all the items on checkout cart will show */}
                        <div className='payment_items'>
                            {/* pulling the basket again to get the items */}
                            {basket.map(item => (
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
            <div className='payment_section'>
            <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                            {/* Stripe magic will go */}
                            <form onSubmit={handleSubmit} >
                                {/* stripe card element */}

                            <CardElement onChange={handleChange}/>
                            <div className='payment_priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    {/* if payment is processing let it process */}
                                     <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button> 
                                </div>
                                {/* Errors report if card details are not correct */}
                                {error && <div>{error}</div>}
                                   
                                </form>  
                            </div>       
                            </div>       
                            </div>       
                            </div>       
            
    )
}

export default Payment
