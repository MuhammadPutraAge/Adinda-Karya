import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils";

export const CustomButtonContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 28rem;
  padding: 1.5rem 2.7rem;
  background-color: ${colors.black};
  border-radius: 0.4rem;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    min-width: 16rem;
  }
`;

export const CustomButtonTitle = styled.p`
  color: ${colors.white};
  font-size: 1.6rem;
  font-weight: 500;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
