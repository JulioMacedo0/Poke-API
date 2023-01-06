import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Card } from "../Card";
import * as S from "./styles";

interface ArrayPokemons {
  name: string;
  url: string;
}

interface Types {
  type: {
    name: string;
  };
}

interface Pokemons {
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  name: string;
  id: number;
  types: Types[];
}

interface CardsType {
  next: string | null;
  previous: string | null;
  results: ArrayPokemons[];
}

export const Content = () => {
  const [Pokemons, setPokemons] = useState<Pokemons[]>([]);

  // const paginate = {
  //   next: Cards.next,
  //   previous: Cards.previous,
  // };

  useEffect(() => {
    api.get("/pokemon").then((response) => {
      const requests = response.data.results.map((obj: ArrayPokemons) =>
        fetch(obj.url)
      );

      Promise.all(requests)
        .then((responses) => {
          // All responses are resolved successfully
          return Promise.all(responses.map((response) => response.json()));
        })
        .then((data: Pokemons[]) => {
          // This is an array of the response data in JSON format
          console.log(data + " data in then");
          setPokemons(data);
        })
        .catch((error) => {
          // If any of the requests fail, this catch block will be executed
          console.error(error);
        });
    });
  }, []);

  return (
    <S.Container>
      {Pokemons.map((pokemon) => {
        console.log(pokemon.types + " type test");
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
  );
};
