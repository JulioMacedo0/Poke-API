import styled from "styled-components";

export const Container = styled.div`
margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 5px;
`;


export const Paragraph = styled.p`

color: ${(props) =>  props.theme.dark_black};
font-size: 0.95rem;

`;
