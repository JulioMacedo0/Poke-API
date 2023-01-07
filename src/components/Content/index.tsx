import { usePokemon } from "../../context/PokemonContext";

import { Card } from "../Card";
import * as S from "./styles";

// interface CardsType {
//   next: string | null;
//   previous: string | null;
//   results: ArrayPokemons[];
// }

export const Content = () => {
  const { pokemons, page, GetPokemons } = usePokemon();

  return (
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
      <button disabled={page - 1 < 1} onClick={() => GetPokemons(page - 1)}>
        Previous Page
      </button>
      <button onClick={() => GetPokemons(page + 1)}>Next Page</button>
    </S.Container>
  );
};
