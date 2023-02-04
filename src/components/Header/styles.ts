import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5.3125rem;
  background-color: ${(props) => props.theme["black"]};
`;

export const HeaderWrap = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 70rem;
  height: 100%;
  margin: 0 auto;

  img {
    margin-right: 1rem;
  }

  div {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }

  input {
    appearance: none;
    font-size: 1rem;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme["yellow"]};
    color: brown;
    border: 2px solid brown;
    transition: background-color 0.2s ease-in-out;
  }

  button {
    appearance: none;
    border: none;
    font-size: 1rem;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme["yellow"]};
    color: brown;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: brown;
      color: yellow;
    }
  }

  @media (max-width: 375px) {
    img {
      display: none;
    }
  }

  @media (max-width: 450px) {
    input {
      width: 70%;
    }
  }
`;

export const ImgLogo = styled.img`
  height: 50px;
`;
