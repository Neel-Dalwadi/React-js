import React, { useState, useEffect } from 'react'
import PokemonCard from './components/pokemonCard'

function Pokemon() {

    const [pokemon, setPokemon] = useState(null)




    return (
        <div>
            <PokemonCard pokemon={pokemon} />
        </div>
    )
}

export default Pokemon
