import * as S from "./styles";

interface AboutCardProps {
text: string
}

export const AboutCard = ({text}: AboutCardProps) => {

return (
<S.Container>
  <S.Paragraph>{text}</S.Paragraph>
</S.Container>
)

}
