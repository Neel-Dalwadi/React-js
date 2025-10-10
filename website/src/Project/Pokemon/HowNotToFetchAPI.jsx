import React, { useEffect, useState } from "react";

const HowNotToFetchAPI = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon/1/";

    // const fetchPokemon = async () => {
    //     fetch(API)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setPokemon(data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             setError(err)
    //             setLoading(false)
    //         });
    // };

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setPokemon(data);
            setLoading(false);
        } catch (error) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);
    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
            Loading ...
        </div>

    }
    if (error) {
        return <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
            <h1 className="text-red-500">Error: {error.message}</h1>
        </div>
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white">
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-gray-800 text-center">
                    Let’s Catch Pokémon
                </h1>
            </header>

            <div className="bg-white w-80 h-auto rounded-2xl shadow-lg flex flex-col items-center p-6 hover:shadow-2xl transition duration-300 ease-in-out">
                {pokemon ? (
                    <>
                        <figure className="bg-green-100 rounded-full p-5 mb-4 w-40 h-40 flex items-center justify-center">
                            <img
                                src={pokemon.sprites.other["official-artwork"].front_default}
                                alt={pokemon.name}
                                className="w-32 h-32 object-contain"
                            />
                        </figure>
                        <h2 className="text-2xl font-semibold capitalize text-gray-700 mb-2">
                            {pokemon.name}
                        </h2>
                        <p className="text-gray-600">
                            <span className="font-semibold">Height:</span> {pokemon.height}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Weight:</span> {pokemon.weight}
                        </p>
                        <div className="mt-3">
                            <h3 className="font-semibold text-gray-700 mb-1">Abilities:</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {pokemon.abilities.map((ab, index) => (
                                    <li key={index}>{ab.ability.name}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
                )}
            </div>
        </div>
    );


};

export default HowNotToFetchAPI;
