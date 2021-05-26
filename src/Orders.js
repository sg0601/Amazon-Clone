import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
    // create a usestate to state all the orders
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
// when app loads useeffect will run only once
  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')

        .orderBy('created', 'desc')
        // row time snapshot of db if values are pushed and removed from db
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
{/* order container */}
            <div className='orders_order'>
                {/* map through each order */}
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders