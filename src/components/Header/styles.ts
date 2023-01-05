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

  div {
    align-items: center;
    display: flex;
    gap: 0.5rem;

    svg {
      color: white;
    }
  }

  @media (max-width: 350px) {
    img {
      display: none;
    }
  }
`;

export const ImgLogo = styled.img`
  height: 50px;
`;
