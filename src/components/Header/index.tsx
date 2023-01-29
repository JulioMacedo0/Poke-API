import { MagnifyingGlass } from "phosphor-react";
import Logo from "../../assets/pokeball.svg";
import { usePokemon } from "../../context/PokemonContext";
import * as S from "./styles";

export const Header = () => {

  const { getPokemon, onChangeInput, input } = usePokemon();
  return (
    <S.HeaderContainer>
      <S.HeaderWrap>
        <S.ImgLogo src={Logo} />
        <div>
          <MagnifyingGlass size={22} />
          <input value={input} type="text" onChange={ (event) => onChangeInput(event.target.value)} onKeyDown={(event) => {
            if (event.keyCode === 13 || event.keyCode === 10 || event.key === 'Tab' ) {
              getPokemon(input);
              }
          }}/>
          <button onClick={ () => getPokemon(input)}>Search</button>
        </div>
      </S.HeaderWrap>
    </S.HeaderContainer>
  );
};
