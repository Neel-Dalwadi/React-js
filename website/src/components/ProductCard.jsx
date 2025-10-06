import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div className="border rounded-lg shadow-md hover:shadow-xl transition p-4">
            <img src={product.image} alt={product.name} className="h-40 w-full object-contain" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <Link
                to={`/product/${product.id}`}
                className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md"
            >
                View
            </Link>
        </div>
    );
}

export default ProductCard;
