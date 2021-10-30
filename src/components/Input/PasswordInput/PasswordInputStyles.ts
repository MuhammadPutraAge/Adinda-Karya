import styled from "styled-components";
import { colors } from "../../../utils";

export const PasswordInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PasswordInputLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.black};
  margin-bottom: 0.8rem;
`;

export const PasswordInputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  border: 2px solid ${colors.grey};
  border-radius: 0.4rem;
`;

export const PasswordInputField = styled.input`
  padding: 0.8rem 1.6rem 0.8rem 0;
  flex: 1;
  outline: none;
  border: none;
  padding-right: 1.6rem;
  font-size: 1.4rem;
  color: ${colors.black};
`;

export const PasswordInputIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
`;
