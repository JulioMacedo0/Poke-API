import { MagnifyingGlass } from "phosphor-react";
import Logo from "../../assets/pokeball.svg";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderWrap>
        <S.ImgLogo src={Logo} />
        <div>
          <MagnifyingGlass size={22} />
          <input type="text" />
          <button>Search</button>
        </div>
      </S.HeaderWrap>
    </S.HeaderContainer>
  );
};
