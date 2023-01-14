import { ArrowLeft, Heart } from "phosphor-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { ProgressBar } from "../../components/ProgressBar";

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
const [tab, setTab] = useState(1)
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
          <S.PokemonInfo>
            <S.TabContainer>
              <S.TabHeader>
                <S.TabHeaderTitle onClick={() => setTab(1)} active={tab == 1}>About</S.TabHeaderTitle>
                <S.TabHeaderTitle onClick={() => setTab(2)} active={tab == 2}>Base Stats</S.TabHeaderTitle>
                <S.TabHeaderTitle onClick={() => setTab(3)} active={tab == 3}>Evolution</S.TabHeaderTitle>
                <S.TabHeaderTitle onClick={() => setTab(4)} active={tab == 4}>Moves</S.TabHeaderTitle>
              </S.TabHeader>

              <S.TabContent active={tab == 1}>
                <S.TabRow>
                  <S.TabTitle>Species </S.TabTitle>
                  <S.TabText>Seed</S.TabText>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Height </S.TabTitle>
                  <S.TabText>2'3.6*(0.70cm)</S.TabText>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Weight </S.TabTitle>
                  <S.TabText>15.2 lbs (6.9kg)</S.TabText>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Abilities </S.TabTitle>
                  <S.TabText>Overgrow, Cholprophyl</S.TabText>
                </S.TabRow>
              </S.TabContent>

              <S.TabContent active={tab == 2}>
              <S.TabRow>
                  <S.TabTitle>HP </S.TabTitle>
                  <S.TabText>45</S.TabText>
                  <ProgressBar maxValue={100} currentValue={45}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Attack </S.TabTitle>
                  <S.TabText>60</S.TabText>
                  <ProgressBar maxValue={100} currentValue={60}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Defense </S.TabTitle>
                  <S.TabText>48</S.TabText>
                  <ProgressBar maxValue={100} currentValue={48}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Sp. Atk </S.TabTitle>
                  <S.TabText>65</S.TabText>
                  <ProgressBar maxValue={100} currentValue={65}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Sp. Def </S.TabTitle>
                  <S.TabText>65</S.TabText>
                  <ProgressBar maxValue={100} currentValue={65}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Speed </S.TabTitle>
                  <S.TabText>45</S.TabText>
                  <ProgressBar maxValue={100} currentValue={45}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Total </S.TabTitle>
                  <S.TabText>317</S.TabText>
                  <ProgressBar maxValue={1000} currentValue={317}/>
                </S.TabRow>
              </S.TabContent>

              <S.TabContent active={tab == 3}>
                Tab 3
              </S.TabContent>

              <S.TabContent active={tab == 4}>
                Tab 4
              </S.TabContent>

            </S.TabContainer>
          </S.PokemonInfo>

        </S.Content>
      </S.Container>
    </>
  );
};
