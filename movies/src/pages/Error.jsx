import React from "react";

function Error() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
                <p className="text-lg mb-4">Oops! Page not found.</p>
                <a href="/" className="text-red-400 hover:underline">
                    Go back home
                </a>
            </div>
        </div>
    );
}

export default Error;
