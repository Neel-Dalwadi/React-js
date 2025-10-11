import React, { useState, useEffect } from 'react'

function pokemonCard({ poke }) {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")

    const API = "https://pokeapi.co/api/v2/pokemon?limit=24"

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            const detailPokemon = await Promise.all(
                data.results.map(async (currPokemon) => {
                    const res = fetch(currPokemon.url);
                    const data = (await res).json();
                    return data;
                })
            );
            setPokemon(detailPokemon);
            setLoading(false);
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    const searchData = pokemon.filter((currPokemon) =>
        currPokemon.name.toLowerCase().includes(search.toLowerCase())

    )

    if (error) {
        return (
            <div className='min-h-screen flex items-center justify-center text-2xl font-semibold'>
                <h1 className='text-red-500'>Error: {error.message}</h1>
            </div>
        )
    }

    if (loading) {
        return (
            <div className='min-h-screen flex items-center justify-center text-2xl font-semibold text-gray-700'>
                Loading ...
            </div>
        )
    }
    return (
        <div className='flex flex-col justify-start items-center gap-3 bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 w-screen h-screen overflow-auto p-4'>
            <h1 className='text-4xl font-extrabold text-gray-800 mt-6 mb-2 drop-shadow-md tracking-wide'>
                ⚡ Let's Catch Pokémon ⚡
            </h1>

            <div className="relative">
                <input
                    type="text"
                    placeholder="Search Pokémon..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="w-80 p-3 pl-10 rounded-2xl border border-gray-300 bg-white/80 shadow-md 
                                focus:outline-none focus:ring-4 focus:ring-red-300 focus:border-red-400 
                                transition-all duration-300 text-gray-700 placeholder-gray-400
                                hover:shadow-lg hover:scale-105"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
            </div> 
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-6">
                {searchData.map((poke) => (
                    <li
                        key={poke.id}
                        className="bg-white w-full rounded-2xl shadow-lg flex flex-col items-center p-6 hover:shadow-2xl transition duration-300 ease-in-out"
                    >
                        <figure className="bg-green-100 rounded-full p-5 mb-4 w-40 h-40 flex items-center justify-center">
                            <img
                                src={poke.sprites.other['official-artwork'].front_default}
                                alt={poke.name}
                                className="w-32 h-32 object-contain"
                            />
                        </figure>

                        <h2 className="text-2xl font-semibold capitalize text-gray-700 mb-2">
                            {poke.name}
                        </h2>

                        <p className="text-gray-600">
                            <span className="font-semibold">Height:</span> {poke.height}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Weight:</span> {poke.weight}
                        </p>

                        <div className="mt-4 w-full text-center">
                            <h3 className="font-semibold text-gray-800 mb-2 text-lg">Abilities</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {poke.abilities.map((ab, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-sm font-medium rounded-full shadow-sm border border-green-300"
                                    >
                                        {ab.ability.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>

    )
}

export default pokemonCard