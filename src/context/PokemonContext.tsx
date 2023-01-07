import { createContext, ReactNode, useContext } from "react";

interface PokemonContextType {}

interface PokemoncontextProps {
  children: ReactNode;
}
const PokemonContext = createContext({} as PokemonContextType);

export const PokemonContextProvider = ({ children }: PokemoncontextProps) => {
  return (
    <PokemonContext.Provider value={{}}>{children}</PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
