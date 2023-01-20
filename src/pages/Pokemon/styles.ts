import styled, { css } from "styled-components";
import { GetColor } from "../../helpers/get-color";
interface Primarytype {
  type: string;
}

interface TabProps {
  active: boolean
}

interface RowProps {
  columns: number
}

export const Container = styled.div`
  max-width: 70rem;
  height: calc(100vh - 5.3125rem);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Content = styled.div<Primarytype>`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  width: 100%;
  height: 100%;
  background-color:  ${(props) => GetColor(props.type)};
  max-width: 872px;

  header {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      color: ${(props) => props.theme.white};
    }
  }
  img {
    position: absolute;
    bottom: -14rem;
    top: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 10rem;
    height: 10rem;
  }
`;
export const Padding = styled.div`
  position: relative;
  height: 40%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
export const Title = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme["title"]};
  font-size: 2.5rem;
  font-weight: bold;
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
`;

export const TypeSpan = styled.span<Primarytype>`
  color: ${(props) => props.theme["title"]};
  background-color:  ${(props) => GetColor(props.type)};

  padding: 0.2rem 1.2rem;
  font-size: 0.75rem;
  filter: brightness(110%);
  border-radius: 99999px;
`;

export const PokemonInfo = styled.div`
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  height: 60%;
  background-color: ${(props) => props.theme.white};
`;

export const TabContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex: 1;
  height: 100%;
  padding: 1rem;
  flex-direction: column;

`

export const TabHeader= styled.div`
margin: 0 auto;
width: 100%;
max-width: 28.125rem;
display: flex;
align-items: flex-start;
justify-content: space-between;
margin-bottom: 1.5rem;

`

export const TabHeaderTitle = styled.div<TabProps>`
  color: ${(props) => props.active ? props.theme.dark_black : props.theme.grey};
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: ${(props) => props.active ? "1.5px solid blue" : "1.5px solid transprent"} ;
  transition: scale 0.2s;


  ${(props) => !props.active && css`
    :hover {
      cursor: pointer;
      opacity: 0.8;
      scale: 1.1;
    }
  `}


`


export const TabContent = styled.div<TabProps>`
overflow: auto;
display: flex;
flex-direction: column;
height: 100%;
margin: 0 auto;
width: 100%;
max-width: 28.125rem;
display: ${props => props.active ? "block" : "none"} ;
`
export const TabRow = styled.div<RowProps>`
display: grid;
margin: 1rem 0;
grid-template-columns: repeat(${props => props.columns}, 1fr);
justify-content: center;
align-items: center;

`

export const TabTitle = styled.p`
 color: ${(props) =>  props.theme.grey};

`

export const TabText = styled.p`

 color: ${(props) =>  props.theme.dark_black};

`
