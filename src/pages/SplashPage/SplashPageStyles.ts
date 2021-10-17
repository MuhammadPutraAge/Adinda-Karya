import styled from "styled-components";

export const SplashPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SplashPageLogo = styled.img`
  width: 14rem;
  height: 14rem;
  margin-bottom: 3.2rem;

  @media screen and (max-width: 480px) {
    width: 12rem;
    height: 12rem;
  }
`;
