import { ArrowLeft, Heart } from "phosphor-react";
import {  useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AboutCard } from "../../components/AboutCard";
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

interface movesType {

  move: {
    name: string;
    url: string;
  }

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
  moves: movesType[];
  species: {
    name: string,
    url: string,
  }
  }
}

interface flavorText {
  flavor_text: string;
}

interface dercriptionMovesType {
  flavor_text_entries: flavorText[];
}

interface eggGroupsType{
  name: string,
  url: string,
}
interface AboutPokemonype {
  evolution_chain: {
    url: string,
  }
  flavor_text_entries: flavorText[],
  egg_groups: eggGroupsType[],
  evolves_from_species: string | null,
  color: {
    name: string,
    url: string,
  }

}


export const Pokemon = () => {

const {state} : UseNavigateProps = useLocation()
const [tab, setTab] = useState(1)
const [descriptionMoves, setDescriptionMoves] = useState<dercriptionMovesType[]>([])
const [aboutPokemon ,setAboutPokemon] = useState<AboutPokemonype>({} as AboutPokemonype)

const totalStats = state.stats.reduce( (accmulator , currenValue) => accmulator + currenValue.base_stat, 0)



const getFlavorsTexts = async (url : string) => {
  const aboutPokemon = await fetch(url).then(
    (result )=> result.json()
  )
  setAboutPokemon(aboutPokemon)
}

 const getPokemonMoveDescription = async ()  =>  {
  const promisses =  await state.moves.map(url =>  fetch( url.move.url));

  Promise.all(promisses)
  .then((responses) => {

    return Promise.all(responses.map((response) => response.json()));

  }).then((result: dercriptionMovesType[]) => {
    setDescriptionMoves(result)
  })
   .catch((error) => {
    console.error(error);
  });
 }


 useEffect(()=> {
  getPokemonMoveDescription()
  getFlavorsTexts(state.species.url)
 }, [])



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
                state.pokemonTypes.map( type => <S.TypeSpan key={type.type.name} type={state.pokemonTypes[0].type.name}>{type.type.name}</S.TypeSpan>)
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
              <AboutCard text={aboutPokemon.flavor_text_entries[0].flavor_text}/>
                <S.TabRow columns={2}>
                  <S.TabTitle>Base Experience </S.TabTitle>
                  <S.TabText>{state.base_experience}</S.TabText>
                </S.TabRow>
                <S.TabRow columns={2}>
                  <S.TabTitle>Height </S.TabTitle>
                  <S.TabText>{state.height}</S.TabText>
                </S.TabRow>
                <S.TabRow columns={2}>
                  <S.TabTitle>Weight </S.TabTitle>
                  <S.TabText>{state.weight}</S.TabText>
                </S.TabRow>
                <S.TabRow columns={2}>
                  <S.TabTitle>Abilities </S.TabTitle>
                  <S.TabText>{state.abilities.map( Abilities => Abilities.ability.name).join(', ')}</S.TabText>
                </S.TabRow>
              </S.TabContent>

              <S.TabContent active={tab == 2}>
              <S.TabRow columns={3}>
                  <S.TabTitle>HP </S.TabTitle>
                  <S.TabText>{state.stats[0].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[0].base_stat}/>
                </S.TabRow>
                <S.TabRow columns={3}>
                  <S.TabTitle>Attack </S.TabTitle>
                  <S.TabText>{state.stats[1].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[1].base_stat}/>
                </S.TabRow>
                <S.TabRow columns={3}>
                  <S.TabTitle>Defense </S.TabTitle>
                  <S.TabText>{state.stats[2].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[2].base_stat}/>
                </S.TabRow>
                <S.TabRow columns={3}>
                  <S.TabTitle>Sp. Atk </S.TabTitle>
                  <S.TabText>{state.stats[3].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[3].base_stat}/>
                </S.TabRow>
                <S.TabRow columns={3}>
                  <S.TabTitle>Sp. Def </S.TabTitle>
                  <S.TabText>{state.stats[4].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[4].base_stat}/>
                </S.TabRow>
                <S.TabRow columns={3}>
                  <S.TabTitle>Speed </S.TabTitle>
                  <S.TabText>{state.stats[5].base_stat}</S.TabText>
                  <ProgressBar maxValue={200} currentValue={state.stats[5].base_stat}/>
                </S.TabRow>
                <S.TabRow columns={3}>
                  <S.TabTitle>Total </S.TabTitle>
                  <S.TabText>{totalStats}</S.TabText>
                  <ProgressBar maxValue={1000} currentValue={totalStats}/>
                </S.TabRow>
              </S.TabContent>

              <S.TabContent active={tab == 3}>
                Tab 3
              </S.TabContent>

              <S.TabContent active={tab == 4}>

                {state.moves.map(  (move, index) =>  {
                  return (
                    <S.TabRow key={move.move.name} columns={2}>
                    <S.TabTitle>{move.move.name}</S.TabTitle>
                    <S.TabText >{descriptionMoves[index]?.flavor_text_entries[0]?.flavor_text}</S.TabText>
                    </S.TabRow>
                  )
                })}

              </S.TabContent>

            </S.TabContainer>
          </S.PokemonInfo>

        </S.Content>
      </S.Container>
    </>
  );
};
