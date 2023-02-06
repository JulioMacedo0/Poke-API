import styled from "styled-components";
import { GetColor } from "../../helpers/get-color";

interface loadingProps {
  type: string;
}

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
  color: ${(props) => props.theme.dark_black};
  font-size: 0.95rem;
`;

export const loading = styled.div<loadingProps>`
  width: 2rem;
  height: 2rem;
  border: 3px solid ${(props) => GetColor(props.type)};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
