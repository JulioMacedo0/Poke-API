import { Title, TypeSpan } from "../StylesComponents/styles";
import PokeImg from "../../assets/buba.svg";
import * as S from "./styles";

export const Card = () => {
  return (
    <S.Container>
      <Title>Bulbasaur</Title>
      <S.Content>
        <S.TypeDiv>
          <TypeSpan>Grass</TypeSpan>
          <TypeSpan>Poinson</TypeSpan>
        </S.TypeDiv>
        <S.Image src={PokeImg} />
      </S.Content>
    </S.Container>
  );
};
