import { Title, TypeSpan } from "../StylesComponents/styles";
import PokeImg from "../../assets/buba.svg";
import * as S from "./styles";

interface CardProps {
  name: string;
  pokemonImg: string;
}

export const Card = ({ name, pokemonImg }: CardProps) => {
  return (
    <S.Container>
      <Title>{name}</Title>
      <S.Content>
        <S.TypeDiv>
          <TypeSpan>Grass</TypeSpan>
          <TypeSpan>Poinson</TypeSpan>
        </S.TypeDiv>
        <S.Image src={pokemonImg} />
      </S.Content>
    </S.Container>
  );
};
