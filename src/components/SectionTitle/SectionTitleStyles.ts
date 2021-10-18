import styled from "styled-components";
import { colors } from "../../utils";

export const SectionTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionTitleHeading = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
  color: ${colors.black};

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const SectionTitleDescription = styled.p`
  width: 26rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${colors.grey};

  @media screen and (max-width: 480px) {
    width: 23rem;
    font-size: 1.2rem;
  }
`;
