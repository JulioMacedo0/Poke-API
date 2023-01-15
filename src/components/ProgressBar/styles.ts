import styled from "styled-components";

interface ProgressBarProps {
  currentValue: number;
  maxValue: number;
}

export const ProgressBar = styled.div`
  width: 100%;
  height: 0.45rem;
  background: ${props => props.theme.light_grey};
  position: relative;
  border-radius: 10px;

  &::before {
    content: "";
    width: ${({ currentValue, maxValue }: ProgressBarProps) => `calc(${currentValue} / ${maxValue} * 100%)`};
    height: 100%;
    background: ${props => props.theme.green};
    border-radius: 10px;
    position: absolute;
  }
`;
