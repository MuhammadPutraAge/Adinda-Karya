import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils";

interface FurnitureItemImageProps {
  image: string;
}

export const FurnitureItemContainer = styled(Link)`
  height: 28rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px ${colors.transparentBlack};
  border-radius: 0.4rem;
  overflow: hidden;
  text-decoration: none;

  @media screen and (max-width: 991px) {
    height: 24rem;
  }

  @media screen and (max-width: 600px) {
    height: 22rem;
  }
`;

export const FurnitureItemImage = styled.div<FurnitureItemImageProps>`
  height: 70%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const FurnitureItemBadge = styled.p`
  padding: 0.6rem 1.6rem;
  background-color: ${colors.purple};
  color: ${colors.white};
  font-size: 1.4rem;
  font-weight: 400;
  border-bottom-left-radius: 1.2rem;
  position: absolute;
  top: 0;
  right: 0;
`;

export const FurnitureItemInfo = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem 2.4rem;
`;

export const FurnitureItemTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.black};

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FurnitureItemPrice = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.grey};

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
