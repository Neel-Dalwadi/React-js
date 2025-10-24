export const getMoviesData = async (search = "titanic", page = 1) => {
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?s=${search}&page=${page}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { Search: [], totalResults: 0 };
    }
};

export const getMovieDetails = async (imdbID) => {
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?i=${imdbID}&apikey=${import.meta.env.VITE_OMDB_API_KEY}&plot=full`
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return {};
    }
};
