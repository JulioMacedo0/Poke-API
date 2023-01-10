import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  min-height: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 1rem;
  width: 100%;
  height: 85vh;
  background-color: ${(props) => props.theme.green};
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
    margin: 0 auto;
    width: 12rem;
  }
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

export const TypeSpan = styled.span`
  color: ${(props) => props.theme["title"]};
  background-color: ${(props) => props.theme.green};

  padding: 0.2rem 1.2rem;
  font-size: 0.75rem;
  filter: brightness(110%);
  border-radius: 99999px;
`;

export const PokemonInfo = styled.div``;
