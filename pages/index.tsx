import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import PokemonsList from "../components/PokemonsList";
import { ReactQueryDevtools } from 'react-query/devtools'
import GlobalProvider from '../styles/GlobalProvider';
import PokemonDetails from "../components/PokemonDetails";
import {Pokemon} from "../types";
import styled from "@emotion/styled";
import useClickOutside from "../hooks/use-click-outside";

const queryClient = new QueryClient();

export const Container = styled.div`
  width: 100%;
  max-width: 1200rem;
  margin: 20rem auto;
  padding: 0 20rem;
`

const Index = () => {
    const [panelStatus, setPanelStatus] = useState(false);
    const [slPokemon, setSlPokemon] = useState<Pokemon | null>(null)
    const panelRef = useClickOutside(() => setPanelStatus(false));

    const handlePokemonClick = (pokemon: Pokemon) => {
        setSlPokemon(pokemon);
        setPanelStatus(true)
    }

    const handleClosePanel = () => {
        setPanelStatus(false)
        setSlPokemon(null)
    }

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalProvider panelStatus={panelStatus} />
            <Container ref={panelRef}>
                <PokemonsList handlePokemonClick={handlePokemonClick} />
                <PokemonDetails panelStatus={panelStatus} handleClosePanel={handleClosePanel} slPokemon={slPokemon} />
            </Container>

            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default Index;