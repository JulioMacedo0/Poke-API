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
  onClick: () => void;
}

export const Card = ({ name, pokemonImg, types, onClick }: CardProps) => {
  return (
    <S.Container type={types[0].type.name} onClick={onClick}>
      <Title>{name}</Title>
      <S.Content>
        <S.TypeDiv>
          {types.map((type) => (
            <S.TypeSpan type={types[0].type.name} key={type.type.name}>
              {type.type.name}
            </S.TypeSpan>
          ))}
        </S.TypeDiv>
        <S.Image src={pokemonImg} />
      </S.Content>
    </S.Container>
  );
};
