import { usePokemon } from "../../context/PokemonContext";
import { Card } from "../Card";
import * as S from "./styles";

import Lottie from "react-lottie";
import pokeball from "../../lotties/pokeball.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: pokeball,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

// interface CardsType {
//   next: string | null;
//   previous: string | null;
//   results: ArrayPokemons[];
// }

export const Content = () => {
  const { pokemons, page, isLoading, GetPokemons } = usePokemon();

  return (
    <>
      <S.Container>
        {pokemons?.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              pokemonImg={pokemon.sprites.other.dream_world.front_default}
              types={pokemon.types}
            />
          );
        })}
      </S.Container>
      <S.ButtonsContainer>
        <button disabled={page - 1 < 1} onClick={() => GetPokemons(page - 1)}>
          Previous Page
        </button>
        <span>{page}</span>
        <button onClick={() => GetPokemons(page + 1)}>Next Page</button>
        {isLoading && (
          <S.Overlay>
            <Lottie options={defaultOptions} height={400} width={400} />
          </S.Overlay>
        )}
      </S.ButtonsContainer>
    </>
  );
};
