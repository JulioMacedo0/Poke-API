import * as S from "./styles";

interface ProgressBarProps {
  currentValue: number;
  maxValue: number;
}


export const ProgressBar = ({currentValue, maxValue}: ProgressBarProps) => {
    return (
      <S.ProgressBar maxValue={maxValue} currentValue={currentValue}>

      </S.ProgressBar>
    )
};
