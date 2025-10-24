import React, { useEffect, useState } from "react";
import { getMoviesData } from "../api/GetAPIData";
import { Link } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("titanic");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);
    const [jumpPage, setJumpPage] = useState("");

    const fetchMovies = async (searchTerm = search, pageNum = page) => {
        setLoading(true);
        const data = await getMoviesData(searchTerm, pageNum);
        if (data.Response === "True") {
            setMovies(data.Search);
            setTotalResults(parseInt(data.totalResults));
        } else {
            setMovies([]);
            setTotalResults(0);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMovies();
    }, [page]);

    const handleSearch = () => {
        setPage(1);
        fetchMovies(search, 1);
    };

    const handleJump = () => {
        const num = parseInt(jumpPage);
        const totalPages = Math.ceil(totalResults / 10);
        if (!isNaN(num) && num >= 1 && num <= totalPages) {
            setPage(num);
            setJumpPage("");
        }
    };

    const totalPages = Math.ceil(totalResults / 10);

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg">
                    🎬 Discover Movies
                </h1>

                <div className="flex justify-center mb-10 gap-2 flex-wrap">
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-700 rounded-l-full px-5 py-3 w-64 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-yellow-500 text-black px-5 py-3 rounded-r-full font-semibold hover:bg-yellow-400 transition-colors"
                    >
                        Search
                    </button>
                </div>

                {loading ? (
                    <p className="text-center text-gray-400 text-lg animate-pulse">Loading...</p>
                ) : movies.length === 0 ? (
                    <p className="text-center text-gray-400 text-lg">No movies found.</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                            {movies.map((movie) => (
                                <Link key={movie.imdbID} to={`/movies/${movie.imdbID}`}>
                                    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group">
                                        <div className="relative">
                                            <img
                                                src={
                                                    movie.Poster && movie.Poster !== "N/A"
                                                        ? movie.Poster
                                                        : "https://via.placeholder.com/300x450?text=No+Image"
                                                }
                                                alt={movie.Title}
                                                className="w-full h-72 object-cover"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <p className="text-white text-center px-2 font-semibold">{movie.Title}</p>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-900">
                                            <h2 className="text-lg font-semibold text-yellow-400 truncate">{movie.Title}</h2>
                                            <p className="text-gray-400 mt-1 text-sm">Year: {movie.Year}</p>
                                            <p className="text-gray-400 mt-1 text-sm">Type: {movie.Type}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-center mt-10 gap-4 flex-wrap items-center">
                            <button
                                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                disabled={page === 1}
                                className={`px-4 py-2 rounded-full ${page === 1
                                        ? "bg-gray-700 cursor-not-allowed"
                                        : "bg-yellow-500 text-black hover:bg-yellow-400 transition"
                                    }`}
                            >
                                Previous
                            </button>

                            <span className="px-4 py-2 bg-gray-700 rounded-full">
                                Page {page} of {totalPages}
                            </span>

                            <button
                                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={page === totalPages || totalPages === 0}
                                className={`px-4 py-2 rounded-full ${page === totalPages || totalPages === 0
                                        ? "bg-gray-700 cursor-not-allowed"
                                        : "bg-yellow-500 text-black hover:bg-yellow-400 transition"
                                    }`}
                            >
                                Next
                            </button>

                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <input
                                    type="number"
                                    min="1"
                                    max={totalPages}
                                    value={jumpPage}
                                    onChange={(e) => setJumpPage(e.target.value)}
                                    placeholder="Page #"
                                    className="border border-gray-700 px-3 py-2 rounded-full w-20 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <button
                                    onClick={handleJump}
                                    className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400 transition-colors"
                                >
                                    Go
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;
