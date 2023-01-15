import { usePokemon } from "../../context/PokemonContext";
import { Card } from "../Card";
import * as S from "./styles";

import Lottie from "react-lottie";
import pokeball from "../../lotties/pokeball.json";
import { useRef } from "react";
import { useNavigate  } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: pokeball,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};



export const Content = () => {
  const { pokemons, page, isLoading, GetPokemons } = usePokemon();
  const Ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  return (
    <>
      <S.Container ref={Ref}>
        {pokemons?.map((pokemon) => {
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

              }})}
              key={pokemon.id}
              name={pokemon.name}
              pokemonImg={pokemon.sprites.other.dream_world.front_default}
              types={pokemon.types}
            />
          );
        })}
      </S.Container>
      <S.ButtonsContainer>
        <button
          disabled={page - 1 < 1}
          onClick={() => {
            GetPokemons(page - 1);
            Ref.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Previous Page
        </button>
        <span>{page}</span>
        <button
          onClick={() => {
            GetPokemons(page + 1);
            Ref.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Next Page
        </button>
        {isLoading && (
          <S.Overlay>
            <Lottie options={defaultOptions} height={150} width={150} />
          </S.Overlay>
        )}
      </S.ButtonsContainer>
    </>
  );
};
