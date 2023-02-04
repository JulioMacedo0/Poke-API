import styled from "styled-components";

export const Container = styled.main`
  max-width: 70rem;
  min-height: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  max-width: 70rem;
  min-height: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

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

  button:disabled {
    background-color: #ccc;
    color: #666;
    cursor: default;
  }
  button:not(:disabled):hover {
    background-color: brown;
    color: yellow;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Overlay = styled.div`
  position: fixed; /* or absolute */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* semi-transparent black */
  display: flex;
  align-items: center;
  justify-content: center;
`;
