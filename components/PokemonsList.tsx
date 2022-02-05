import React, {useEffect, useRef, useState} from 'react';
import api from "../services/api";
import {Pokemon, PokemonsRes} from "../types";
import {PokAbilities, PokAbility, PokContainer, PokImage, PokList, PokName} from '../styles/PokemonsListStyled';
import Loader from "./Loader";

interface PokemonsListProps {
    handlePokemonClick: (pokemon: Pokemon) => void;
}

const PokemonsList = ({handlePokemonClick}: PokemonsListProps) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const nextLink = useRef("/pokemon?limit=16&offset=0")
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    const fetchPokemons = async() => {
       try {
           const {data} = await api.get<PokemonsRes>(nextLink.current)
           nextLink.current = data.next;

           const pokemonsData = (await Promise.allSettled(data.results.map(async (pok) => {
               let pokemon: Pokemon | null;
               const res = await api.get<Pokemon>(pok.url)
               const {data: species} = await api.get(res.data.species.url);
               pokemon = {...res.data, ...species}

               return pokemon
           })).then(res => res.filter((res) => res.status === 'fulfilled') as PromiseFulfilledResult<Pokemon>[])).map(r => r.value);


           setPokemons(prevState => [...prevState, ...pokemonsData]);
       }
       catch (e) {
           console.error(e)
       }
    }

    const handleClick = (pokemon: Pokemon) => {
        handlePokemonClick(pokemon)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if(entries[0].isIntersecting){
                    nextLink.current && fetchPokemons();
                }
            }
        );
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => observer.disconnect();
    }, [loadMoreRef]);

    return (
        <>
            <PokList>
                {
                    pokemons?.map(pokemon => {
                        const {name, sprites, abilities} = pokemon;
                        return (
                            <PokContainer key={name} onClick={() => handleClick(pokemon)}>
                                <PokAbilities>{abilities.map(ab => (<PokAbility key={ab.ability.name}>{ab.ability.name}</PokAbility>))}</PokAbilities>
                                <PokImage src={sprites.other["official-artwork"].front_default || "/assets/no-image-found.png"} alt={name}/>
                                <PokName data-name="pok-name">{name}</PokName>
                            </PokContainer>
                        )
                    })
                }
            </PokList>
            {nextLink.current && <div ref={loadMoreRef} className="loading..."><Loader /></div>}
        </>
    );
};

export default PokemonsList;