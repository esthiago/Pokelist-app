import React from "react";
import dataPokemon from "../../pokemonList.json"
import Cards from "../Cards/Cards";
import TopBar from "../TopBar/TopBar";
import './stylePokemons.css'

function Pokemons() {
    return(
        <>
            <TopBar />
            <div className="container">
                {dataPokemon.map(pokemon => {
                    return <Cards name={pokemon.name} id={pokemon.id} type={pokemon.typeAbility}></Cards>
                })}
            </div>
        </>
    )
}

export default Pokemons