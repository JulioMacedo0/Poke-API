import styled from "styled-components";

export const Title = styled.p`
  color: ${(props) => props.theme["title"]};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const TypeSpan = styled.span`
  color: ${(props) => props.theme["title"]};
  background-color: ${(props) => props.theme["green"]};

  padding: 0.1rem 1rem;
  font-size: 0.75rem;
  filter: brightness(110%);
  border-radius: 99999px;
`;
