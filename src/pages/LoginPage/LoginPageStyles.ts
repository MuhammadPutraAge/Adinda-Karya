import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils";

export const LoginLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;

export const LoginLogo = styled.img`
  width: 7rem;
  height: 7rem;
  margin-right: 1.6rem;

  @media screen and (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const LoginBrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.black};
`;

export const LoginBrandSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const LoginBrandTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ForgotPasswordLink = styled(Link)`
  align-self: flex-end;
  text-align: right;
  color: ${colors.black};
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
`;

export const NavigateToRegister = styled.p`
  display: flex;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${colors.grey};
`;

export const NavigateToRegisterLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  font-weight: 500;
  margin-left: 4px;
`;
