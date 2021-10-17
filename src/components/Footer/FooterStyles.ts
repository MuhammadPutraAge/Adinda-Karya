import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils";

export const FooterContainer = styled.div`
  padding: 10rem 0;
  background-color: ${colors.black};

  @media screen and (max-width: 1200px) {
    padding: 4rem 0;
  }
`;

export const FooterMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    margin-bottom: 3.2rem;
  }
`;

export const FooterLogo = styled.img`
  width: 8rem;
  height: 8rem;

  @media screen and (max-width: 480px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const FooterBrandContainer = styled.div`
  margin-left: 1.6rem;
  color: ${colors.white};
`;

export const FooterBrandSubtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 300;

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const FooterBrandTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FooterItemTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.white};
  margin-bottom: 0.8rem;

  @media screen and (max-width: 1200px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const FooterAddressContainer = styled.div`
  align-self: flex-start;
  max-width: 28rem;

  @media screen and (max-width: 1200px) {
    margin-bottom: 2.4rem;
  }
`;

export const FooterAddress = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.grey};

  @media screen and (max-width: 1200px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const FooterMenuContainer = styled.div`
  @media screen and (max-width: 1200px) {
    align-self: flex-start;
    margin-bottom: 3.2rem;
  }
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.grey};
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const FooterMediaContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterMediaLink = styled.a`
  text-decoration: none;
  margin-right: 1.6rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const FooterMediaIcon = styled.img`
  width: 4rem;
  height: 4rem;

  @media screen and (max-width: 1200px) {
    width: 5rem;
    height: 5rem;
  }

  @media screen and (max-width: 480px) {
    width: 4rem;
    height: 4rem;
  }
`;
