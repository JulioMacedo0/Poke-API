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

interface statsType {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface abilitiesType {
  ability: {
    name: string;
  };
}


interface UseNavigateProps {
  state: {
  name: string;
  pokemonImg: string;
  pokemonTypes: Types[];
  height: string
  weight: string;
  abilities: abilitiesType[];
  stats: statsType[];
  base_experience: number;
  }
}

export const Pokemon = () => {
const {state} : UseNavigateProps = useLocation()
const [tab, setTab] = useState(1)

const totalStats = state.stats.reduce( (accmulator , currenValue) => accmulator + currenValue.base_stat, 0)
const abilities = state.abilities.map( Abilities => `${Abilities.ability.name}, `)
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
                  <S.TabTitle>Base Experience </S.TabTitle>
                  <S.TabText>{state.base_experience}</S.TabText>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Height </S.TabTitle>
                  <S.TabText>{state.height}</S.TabText>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Weight </S.TabTitle>
                  <S.TabText>{state.weight}</S.TabText>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Abilities </S.TabTitle>
                  <S.TabText>{state.abilities.map( Abilities => Abilities.ability.name).join(', ')}</S.TabText>
                </S.TabRow>
              </S.TabContent>

              <S.TabContent active={tab == 2}>
              <S.TabRow>
                  <S.TabTitle>HP </S.TabTitle>
                  <S.TabText>{state.stats[0].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[0].base_stat}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Attack </S.TabTitle>
                  <S.TabText>{state.stats[1].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[1].base_stat}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Defense </S.TabTitle>
                  <S.TabText>{state.stats[2].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[2].base_stat}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Sp. Atk </S.TabTitle>
                  <S.TabText>{state.stats[3].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[3].base_stat}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Sp. Def </S.TabTitle>
                  <S.TabText>{state.stats[4].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[4].base_stat}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Speed </S.TabTitle>
                  <S.TabText>{state.stats[5].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[5].base_stat}/>
                </S.TabRow>
                <S.TabRow>
                  <S.TabTitle>Total </S.TabTitle>
                  <S.TabText>{totalStats}</S.TabText>
                  <ProgressBar maxValue={1000} currentValue={totalStats}/>
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
