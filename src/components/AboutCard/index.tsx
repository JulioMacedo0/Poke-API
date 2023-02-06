import * as S from "./styles";

interface AboutCardProps {
  text: string;
  type: string;
}

export const AboutCard = ({ text, type }: AboutCardProps) => {
  return (
    <S.Container>
      {text ? <S.Paragraph>{text}</S.Paragraph> : <S.loading type={type} />}
    </S.Container>
  );
};
