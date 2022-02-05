import React from 'react';
import {Pokemon} from "../types";
import {
    ClosePanel,
    PokDetails,
    PokeListInfo,
    PokImage,
    PokMove,
    PokName,
    PokPanel,
    PokPanelWrapper,
    PokStat,
    PokType,
    PokTypes
} from "../styles/PokemonDetailsStyled";

interface PokemonDetailsProps {
    panelStatus: boolean;
    handleClosePanel: () => void;
    slPokemon: Pokemon | null
}

const PokemonDetails = ({panelStatus, handleClosePanel, slPokemon}: PokemonDetailsProps) => {
    if (!slPokemon) {
        return <></>
    }
    return (
        <PokPanelWrapper status={panelStatus}>
            <PokPanel status={panelStatus}>
                <ClosePanel onClick={() => handleClosePanel()}>×</ClosePanel>

                <PokDetails>
                    <PokImage
                        src={slPokemon.sprites.other["official-artwork"].front_default || "/assets/no-image-found.png"}
                        alt={slPokemon.name}/>
                    <PokName>{slPokemon.name}</PokName>
                    <PokTypes>Type: {slPokemon.types.map(({type}, i) => <PokType
                        key={`${slPokemon.name}_${i}`}>{type.name}{i === slPokemon?.types.length - 1 ? "" : ","}</PokType>)}</PokTypes>
                    <PokTypes>Weight: {slPokemon.weight}kg</PokTypes>
                    <PokeListInfo>{slPokemon.stats.map(({base_stat, stat: {name}}, i) => <PokStat
                        key={`${name}_${i}`}>{name} {base_stat}</PokStat>)}</PokeListInfo>
                    <PokeListInfo>{slPokemon.moves.slice(0, 8).map(({move,}, i) => <PokMove
                        key={`${move.name}_${i}`}>{move.name}</PokMove>)}</PokeListInfo>
                </PokDetails>
            </PokPanel>
        </PokPanelWrapper>
    );
};

export default PokemonDetails;