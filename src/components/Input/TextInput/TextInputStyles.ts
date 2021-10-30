import styled from "styled-components";
import { colors } from "../../../utils";

export const TextInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextInputLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.black};
  margin-bottom: 0.8rem;
`;

export const TextInputField = styled.input`
  outline: none;
  border: 2px solid ${colors.grey};
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  color: ${colors.black};
`;
