import styled from "styled-components";
import { colors } from "../../utils";

interface CustomButtonContainerProps {
  type: "primary" | "secondary";
}

interface CustomButtonTitleProps {
  type: "primary" | "secondary";
}

export const CustomButtonContainer = styled.div<CustomButtonContainerProps>`
  width: 100%;
  padding: 1.2rem 2.7rem;
  background-color: ${(props) =>
    props.type === "primary" ? colors.black : colors.white};
  border: 2px solid ${colors.black};
  border-radius: 0.4rem;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    padding: 1rem 2.4rem;
  }
`;

export const CustomButtonTitle = styled.p<CustomButtonTitleProps>`
  color: ${(props) => (props.type === "primary" ? colors.white : colors.black)};
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;
