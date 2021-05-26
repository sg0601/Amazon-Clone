import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
console.log('this is the basket',basket)
  const addToBasket = () => {
    // dispatch the item into the data layer
    {/* // // product:
        // title
        // image
        // price
        // star rating
        // add to basket button */}
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
// using props from react
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
            {/* for symbols */}
          <small>$</small>
           {/* destructuting using react props */}
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
{/* product image */}
      <img src={image} alt=""  />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
