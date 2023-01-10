import { ArrowLeft, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Title } from "../../components/StylesComponents/styles";
import * as S from "./styles";

export const Pokemon = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Content>
          <header>
            <Link to="/">
              <ArrowLeft size={32} />
            </Link>
            <Heart size={32} />
          </header>
          <S.Title>Bulbassaur</S.Title>
          <S.TypeContainer>
            <S.TypeSpan>Grass</S.TypeSpan>
            <S.TypeSpan>Poison</S.TypeSpan>
          </S.TypeContainer>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
        </S.Content>
      </S.Container>
    </>
  );
};
