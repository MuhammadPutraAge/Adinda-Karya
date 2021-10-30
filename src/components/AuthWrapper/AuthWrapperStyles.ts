import styled from "styled-components";
import { BgAuth } from "../../assets";
import { colors } from "../../utils";

export const AuthWrapperContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: ${colors.white};
`;

export const AuthWrapperContent = styled.div`
  width: 30%;
  padding: 6rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1440px) {
    width: 35%;
  }

  @media screen and (max-width: 1248px) {
    width: 40%;
  }

  @media screen and (max-width: 1024px) {
    width: 45%;
  }

  @media screen and (max-width: 991px) {
    padding: 6rem 4rem;
  }

  @media screen and (max-width: 768px) {
    width: 55%;
  }

  @media screen and (max-width: 600px) {
    padding: 6rem 8rem;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    padding: 6rem 3rem;
  }
`;

export const AuthWrapperBackground = styled.div`
  width: 70%;
  background-image: url(${BgAuth});
  background-size: cover;
  background-position: right;

  @media screen and (max-width: 1440px) {
    width: 65%;
  }

  @media screen and (max-width: 1248px) {
    width: 60%;
  }

  @media screen and (max-width: 1024px) {
    width: 55%;
  }

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
