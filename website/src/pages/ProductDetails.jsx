import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <img src={product.image} alt={product.name} className="h-64 w-64 object-contain" />
            <div>
                <h2 className="text-3xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 my-4">{product.description}</p>
                <p className="text-2xl font-bold mb-4">${product.price}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetails;
