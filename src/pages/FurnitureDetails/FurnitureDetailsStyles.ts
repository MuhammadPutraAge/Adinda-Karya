import styled from "styled-components";
import { colors } from "../../utils";

interface FurnitureDetailsImageProps {
  image: string;
}

export const FurnitureDetailsContainer = styled.div`
  padding: 4rem 0;
`;

export const FurnitureDetailsBackContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 4rem;

  @media screen and (max-width: 600px) {
    margin-bottom: 2.4rem;
  }
`;

export const FurnitureDetailsBackIconContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  box-shadow: 0 0 8px ${colors.transparentBlack};
`;

export const FurnitureDetailsBackIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;

  @media screen and (max-width: 600px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const FurnitureDetailsBackTitle = styled.p`
  margin-left: 1.6rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.black};

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const FurnitureDetailsContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 4rem;
  }
`;

export const FurnitureDetailsImage = styled.div<FurnitureDetailsImageProps>`
  width: 55%;
  height: 45rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 0.8rem;
  box-shadow: 0 0 8px ${colors.transparentBlack};

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 3.2rem;
  }

  @media screen and (max-width: 850px) {
    height: 32rem;
  }

  @media screen and (max-width: 480px) {
    height: 20rem;
  }
`;

export const FurnitureDetailsInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const FurnitureDetailsCategoryTitle = styled.p`
  text-transform: uppercase;
  color: ${colors.purple};
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 2px;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const FurnitureDetailsTitle = styled.h1`
  color: ${colors.black};
  font-size: 3.2rem;
  font-weight: 500;
  margin-bottom: 2.4rem;

  @media screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

export const FurnitureDetailsDescriptionTitle = styled.p`
  color: ${colors.black};
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

export const FurnitureDetailsDescription = styled.p`
  text-align: justify;
  color: ${colors.grey};
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 2.4rem;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 850px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const FurnitureDetailsPrice = styled.p`
  color: ${colors.black};
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 3.2rem;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const FurnitureDetailsQtyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem;
`;

export const FurnitureDetailsQtyTitle = styled.p`
  color: ${colors.black};
  font-size: 1.4rem;
  font-weight: 500;
  margin-right: 1.6rem;
`;

export const FurnitureDetailsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 850px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const FurnitureDetailsRelated = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2.4rem;
  margin-top: 3.2rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 768px) {
    margin-top: 2.4rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
