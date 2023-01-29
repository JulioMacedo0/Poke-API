import { usePokemon } from "../../context/PokemonContext";
import { Card } from "../Card";
import * as S from "./styles";

import Lottie from "react-lottie";
import pokeball from "../../lotties/pokeball.json";
import { useRef } from "react";
import { useNavigate  } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: pokeball,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};



export const Content = () => {
  const { pokemons, pokemon, page, isLoading, getPokemons, clearSearchPokemon } = usePokemon();
  const Ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();



  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <S.Container ref={Ref}>
        {
          pokemon.name && <Card
          onClick={() => navigate(`/pokemon`, {state: {
            name: pokemon.name,
            pokemonImg: pokemon.sprites?.other.dream_world.front_default,
            pokemonTypes: pokemon.types,
            stats: pokemon.stats,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities,
            base_experience: pokemon.base_experience,
            moves: pokemon.moves,
            species: pokemon.species
          }}
          )}
            name={pokemon.name}
            pokemonImg={pokemon.sprites?.other.dream_world.front_default}
            types={pokemon.types}
          />
        }
        {!pokemon.name && pokemons?.map((pokemon) => {
          return (
            <Card
              onClick={() => navigate(`/pokemon`, {state: {
                name: pokemon.name,
                pokemonImg: pokemon.sprites.other.dream_world.front_default,
                pokemonTypes: pokemon.types,
                stats: pokemon.stats,
                height: pokemon.height,
                weight: pokemon.weight,
                abilities: pokemon.abilities,
                base_experience: pokemon.base_experience,
                moves: pokemon.moves,
                species: pokemon.species
              }}
              )}
              key={pokemon.id}
              name={pokemon.name}
              pokemonImg={pokemon.sprites.other.dream_world.front_default}
              types={pokemon.types}
            />
          );
        })
        }
      </S.Container>
      <S.ButtonsContainer>

          {
            !pokemon.name &&
        (
        <>
        <button
          disabled={page - 1 < 1}
          onClick={() => {
            getPokemons(page - 1);
            Ref.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Previous Page
        </button>
        <span>{page}</span>
        <button
          onClick={() => {
            getPokemons(page + 1);
            Ref.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Next Page
        </button>
        </>
        )
   }

   {
    pokemon.name && (<button onClick={() => clearSearchPokemon()}>Go home</button>)
   }
        {isLoading && (
          <S.Overlay>
            <Lottie options={defaultOptions} height={150} width={150} />
          </S.Overlay>
        )}
      </S.ButtonsContainer>
    </>
  );
};
