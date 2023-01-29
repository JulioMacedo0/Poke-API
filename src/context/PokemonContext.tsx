import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";

interface PokemonContextType {
  pokemons: Pokemons[];
  pokemon: Pokemons;
  page: number;
  isLoading: boolean;
  input: string;
  getPokemons: (page: number) => void;
  getPokemon: (pokemon: string) => void;
  onChangeInput: (value: string) => void;
  clearSearchPokemon: () => void;
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

interface movesType {

  move: {
    name: string;
    url: string;
  }

}

export interface Pokemons {
  id: number;
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  types: Types[];
  stats: statsType[];
  abilities: abilitiesType[];
  moves: movesType[];
  species: {
    name: string,
    url: string,
  }
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
  const [input , setInput] = useState('');
  const [pokemon, setPokemon] = useState<Pokemons>({} as Pokemons);


const clearSearchPokemon =() => {
  setPokemon({} as Pokemons );
}

const getPokemon = async  (pokemon: String)  => {

    if(pokemon){
  setIsLoading(true);

  try {
    const data = (await api.get(`pokemon/${pokemon}`)).data


  setPokemon(data);
  setIsLoading(false);
  setInput('');
  } catch (error) {

    toast.error('could not find pokemon', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   console.log(error)
    setIsLoading(false);
    setInput('');
  }
}
}

  const onChangeInput = (value: string) => {
      setInput(value);
  }

  const getPokemons = (page: number) => {
    setIsLoading(true);
    const limit = 21;
    const offset = (page - 1) * limit;
    const url = `pokemon?offset=${offset}&limit=${limit}`;

    api.get(`/${url}`).then((response) => {
      const requests = response.data.results.map((obj: ArrayPokemons) =>{
        return fetch(obj.url)
      }
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
 getPokemons(1)
  }, []);

  return (
    <PokemonContext.Provider value={{ input,pokemons, pokemon, page, isLoading, getPokemons, getPokemon, onChangeInput, clearSearchPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
