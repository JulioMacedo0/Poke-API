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
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ccc;
    color: #666;
    cursor: default;
  }
  button:not(:disabled):hover {
    background-color: #3e8e41;
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
