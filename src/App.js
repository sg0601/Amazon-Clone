import React, { useEffect } from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login'
import { auth } from "./firebase";
 import { useStateValue } from "./StateProvider";
 import Payment from "./Payment";
//  importing stripe
 import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// paste your stripe publishable key here
// Promises in JavaScript represent processes that are already happening, which can be chained with callback functions.
const promise = loadStripe(
  "pk_test_51IuEOlSFWksaZ29A6H3TY1ZCp4EjccgmxtdmCy1F9oA0GsZLFOhko4MKhu7p4G7gpUeUYXwsSFloZTveHlw5pCgi00mu6k6Fow"
);


function App() {
  // code from react context API
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    // it is like if statment
    // onAuthStateChanged is a listener that always keep listening login and logout

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        // dispatch to shoot the user into the datalayer

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
        
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
    <div className="app">
      {/* render header as global component */}
    
      <Switch>
        {/* {/* ROUTE FOR LOGIN PAGE */}
         <Route path="/login">
         <Login /> 
        </Route>
         
        {/* route for checkout page */}
      <Route path="/checkout">
      <Header />
         <Checkout />
        </Route>
        {/* route for payment page */}
        <Route path="/payment">
      <Header />
      {/* elements wraps up the payment element */}
      <Elements stripe={promise}>
              <Payment />
            </Elements>
        
        </Route>
        {/* default root must always be at the bottom */}
        <Route path="/">
          {/* route path to always stay on the homepage and render header and homepage component */}
          <Header />
         <Home />
        </Route>
         

      </Switch>
      {/* redering different App components using switch */}
      {/* Header:amazon logo and search bar component */}
      {/* header component */}
      {/* HOME COMPONENT */}
     </div> 
     </Router>
  );
}

export default App;
