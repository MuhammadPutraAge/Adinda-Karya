import styled from "styled-components";
import { colors } from "../../utils";

export const HomePageContainer = styled.div`
  padding: 4rem 0;
`;

export const HomePageSection = styled.div`
  width: 100%;
  padding: 4rem 8rem;
  box-shadow: 0 0 8px ${colors.transparentBlack};
  border-radius: 0.8rem;
  margin-top: 4rem;

  &:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 1200px) {
    padding: 4rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const HomePageSectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${colors.black};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const HomePageCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 5rem;
  margin-top: 2.4rem;

  @media screen and (max-width: 1440px) {
    gap: 3.2rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.4rem;
  }

  @media screen and (max-width: 768px) {
    gap: 1.6rem;
    margin-top: 1.6rem;
  }
`;

export const HomePageFurnitureList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2.4rem;
  margin-top: 2.4rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 768px) {
    gap: 1.8rem;
    margin-top: 1.6rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const HomePageNewFurniture = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2.4rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 768px) {
    margin-top: 2.4rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-bottom: 3.2rem;
  }
`;

export const HomePageButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomePageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24rem;
`;
