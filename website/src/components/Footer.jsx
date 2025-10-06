import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <p>© {new Date().getFullYear()} ShopEase — All rights reserved.</p>
        </footer>
    );
}

export default Footer;
