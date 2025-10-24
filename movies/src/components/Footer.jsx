import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-10 px-6 md:px-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Movie<span className="text-red-600">Explorer</span>
                    </h2>
                    <p className="text-sm mt-3 leading-relaxed">
                        Discover and explore the best movies from around the world. Stream, rate, and enjoy your favorites anytime.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <FaFacebookF className="hover:text-red-500 cursor-pointer transition" />
                        <FaTwitter className="hover:text-red-500 cursor-pointer transition" />
                        <FaInstagram className="hover:text-red-500 cursor-pointer transition" />
                        <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-red-500 cursor-pointer">Trending Movies</li>
                        <li className="hover:text-red-500 cursor-pointer">Top Rated</li>
                        <li className="hover:text-red-500 cursor-pointer">New Releases</li>
                        <li className="hover:text-red-500 cursor-pointer">Upcoming</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Genres</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-red-500 cursor-pointer">Action</li>
                        <li className="hover:text-red-500 cursor-pointer">Drama</li>
                        <li className="hover:text-red-500 cursor-pointer">Comedy</li>
                        <li className="hover:text-red-500 cursor-pointer">Horror</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
                    <p className="text-sm mb-4">
                        Subscribe to get updates on new releases and movie news.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-l-md focus:outline-none"
                        />
                        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md text-white font-semibold transition">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6">
                © 2025 Movie Explorer. All Rights Reserved. | Designed by{" "}
                <span className="text-white font-semibold">Neel Dalwadi</span>
            </div>
        </footer>
    );
}

export default Footer;
