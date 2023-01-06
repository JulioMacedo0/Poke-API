import styled from "styled-components";

export const Container = styled.div`
  width: 17.5rem;
  padding: 1rem;
  min-width: 13rem;
  height: 10rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme["green"]};
  transition: transform 0.2s, box-shadow 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 10px 10px ${(props) => props.theme["black"]};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const TypeDiv = styled.div`
  display: flex;
  width: 50px;
  height: 100%;
  flex-wrap: wrap;
  justify-content: start;
  gap: 0.5rem;
`;

export const Image = styled.img`
  height: 6rem;
`;

export const TypeSpan = styled.span`
  color: ${(props) => props.theme["title"]};
  background-color: ${(props) => props.theme["green"]};

  padding: 0.1rem 1rem;
  font-size: 0.75rem;
  filter: brightness(110%);
  border-radius: 99999px;
`;
