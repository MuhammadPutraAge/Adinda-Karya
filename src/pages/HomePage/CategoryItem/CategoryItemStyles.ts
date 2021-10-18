import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../utils";

export const CategoryItemContainer = styled(Link)`
  box-shadow: 0 0 8px ${colors.transparentBlack};
  border-radius: 0.8rem;
  padding: 1.5rem 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const CategoryItemIcon = styled.img`
  width: 7rem;
  height: 7rem;
  margin-bottom: 0.4rem;

  @media screen and (max-width: 1200px) {
    width: 6rem;
    height: 6rem;
  }

  @media screen and (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }

  @media screen and (max-width: 600px) {
    width: 4rem;
    height: 4rem;
  }

  @media screen and (max-width: 480px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const CategoryItemTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${colors.black};
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
