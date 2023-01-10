import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../api/api";

interface PokemonContextType {
  pokemons: Pokemons[];
  page: number;
  GetPokemons: (page: number) => void;
  isLoading: boolean;
}

interface PokemoncontextProps {
  children: ReactNode;
}
const PokemonContext = createContext({} as PokemonContextType);

interface Types {
  type: {
    name: string;
  };
}
interface statsType {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface abilitiesType {
  ability: {
    name: string;
  };
}

interface Pokemons {
  id: number;
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  types: Types[];
  stats: statsType[];
  abilities: abilitiesType[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

interface ArrayPokemons {
  name: string;
  url: string;
}

export const PokemonContextProvider = ({ children }: PokemoncontextProps) => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const GetPokemons = (page: number) => {
    setIsLoading(true);
    const limit = 21;
    const offset = (page - 1) * limit;
    const url = `pokemon?offset=${offset}&limit=${limit}`;

    api.get(`/${url}`).then((response) => {
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
          setPokemons(data);
          setPage(page);
          setTimeout(() => setIsLoading(false), 800);
        })
        .catch((error) => {
          // If any of the requests fail, this catch block will be executed
          console.error(error);
        });
    });
  };

  useEffect(() => {
    api.get("/pokemon?offset=0&limit=21").then((response) => {
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
          console.log(data[3]);
          setPokemons(data);
          setTimeout(() => setIsLoading(false), 800);
        })
        .catch((error) => {
          // If any of the requests fail, this catch block will be executed
          console.error(error);
        });
    });
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, page, isLoading, GetPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
