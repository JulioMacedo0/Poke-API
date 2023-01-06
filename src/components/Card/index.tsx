import { Title } from "../StylesComponents/styles";
import * as S from "./styles";

interface Types {
  type: {
    name: string;
  };
}

interface CardProps {
  name: string;
  pokemonImg: string;
  types: Types[];
}

export const Card = ({ name, pokemonImg, types }: CardProps) => {
  return (
    <S.Container>
      <Title>{name}</Title>
      <S.Content>
        <S.TypeDiv>
          {types.map((type) => (
            <S.TypeSpan key={type.type.name}>{type.type.name}</S.TypeSpan>
          ))}
        </S.TypeDiv>
        <S.Image src={pokemonImg} />
      </S.Content>
    </S.Container>
  );
};
