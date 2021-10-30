import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils";

export const RegisterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;

export const RegisterLogo = styled.img`
  width: 7rem;
  height: 7rem;
  margin-right: 1.6rem;

  @media screen and (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const RegisterBrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.black};
`;

export const RegisterBrandSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const RegisterBrandTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const NavigateToLogin = styled.p`
  display: flex;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${colors.grey};
`;

export const NavigateToLoginLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  font-weight: 500;
  margin-left: 4px;
`;
