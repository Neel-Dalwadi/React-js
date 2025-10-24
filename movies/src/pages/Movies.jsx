import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Movies() {
    const moviesData = useLoaderData();
    const movies = moviesData?.Search || [];
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);

    const API_KEY = "5ad33753";

    const handleViewDetails = async (imdbID) => {
        if (selectedMovie === imdbID) {
            setSelectedMovie(null);
            setMovieDetails(null);
            return;
        }

        try {
            const response = await fetch(
                `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}&plot=full`
            );
            const data = await response.json();
            setSelectedMovie(imdbID);
            setMovieDetails(data);
        } catch (error) {
            console.error("Error fetching details:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 py-10">
            <h1 className="text-4xl font-extrabold mb-12 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                🎬 Popular Movies
            </h1>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
                {movies.map((movie) => (
                    <div
                        key={movie.imdbID}
                        className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-60"
                    >
                        <img
                            src={
                                movie.Poster && movie.Poster !== "N/A"
                                    ? movie.Poster
                                    : "https://via.placeholder.com/300x450?text=No+Image"
                            }
                            alt={movie.Title}
                            className="w-full h-80 object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
                            }}
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition duration-300 flex flex-col justify-center items-center opacity-0 hover:opacity-100">
                            <h2 className="text-lg font-bold text-yellow-400 mb-2 text-center px-2">
                                {movie.Title}
                            </h2>
                            <p className="text-gray-300">{movie.Year}</p>
                            <button
                                onClick={() => handleViewDetails(movie.imdbID)}
                                className="mt-4 bg-yellow-500 text-black px-4 py-1 rounded-full hover:bg-yellow-400 font-semibold transition"
                            >
                                {selectedMovie === movie.imdbID ? "Hide Details" : "View Details"}
                            </button>
                        </div>

                        {selectedMovie === movie.imdbID && movieDetails && (
                            <div className="absolute bottom-0 bg-black bg-opacity-90 text-sm p-3 text-left transition-all duration-300 overflow-y-auto max-h-48 w-full">
                                <h3 className="font-semibold text-yellow-400 text-base">
                                    {movieDetails.Title}
                                </h3>
                                <p className="text-gray-300 text-xs mt-1">
                                    <span className="font-semibold">Genre:</span> {movieDetails.Genre}
                                </p>
                                <p className="text-gray-300 text-xs mt-1">
                                    <span className="font-semibold">Director:</span> {movieDetails.Director}
                                </p>
                                <p className="text-gray-400 text-xs mt-2 line-clamp-4">
                                    {movieDetails.Plot}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {movies.length === 0 && (
                <p className="text-center text-gray-400 text-lg mt-10">
                    No movies found. Try searching for something else.
                </p>
            )}
        </div>
    );
}

export default Movies;
