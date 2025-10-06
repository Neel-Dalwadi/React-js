import React, { useState } from "react";

function Cart() {
    const [cartItems] = useState([]);

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty 🛍️</p>
            ) : (
                <p>{cartItems.length} items in cart</p>
            )}
        </div>
    );
}

export default Cart;
