import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}

export default Products;
