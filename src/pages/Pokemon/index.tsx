import { ArrowLeft, Heart } from "phosphor-react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";

import * as S from "./styles";

interface Types {
  type: {
    name: string;
  };
}
interface UseNavigateProps {
  state: {
  name: string;
  pokemonImg: string;
  pokemonTypes: Types[]
}
}

export const Pokemon = () => {
const {state} : UseNavigateProps = useLocation()
  console.log(state)
  return (
    <>
      <Header />
      <S.Container >
        <S.Content type={state.pokemonTypes[0].type.name}>
          <S.Padding>
            <header>
              <Link to="/">
                <ArrowLeft size={32} />
              </Link>
              <Heart size={32} />
            </header>
            <S.Title>{state.name}</S.Title>
            <S.TypeContainer >
              {
                state.pokemonTypes.map( type => <S.TypeSpan type={state.pokemonTypes[0].type.name}>{type.type.name}</S.TypeSpan>)
              }
            </S.TypeContainer>
            <img src={state.pokemonImg} />
          </S.Padding>
          <S.PokemonInfo></S.PokemonInfo>
        </S.Content>
      </S.Container>
    </>
  );
};
