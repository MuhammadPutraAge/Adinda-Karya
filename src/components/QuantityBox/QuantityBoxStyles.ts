import styled from "styled-components";
import { colors } from "../../utils";

export const QuantityBoxContainer = styled.div`
  width: 14rem;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.grey};
`;

export const QuantityBoxMinusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  border-right: 1px solid ${colors.grey};
  cursor: pointer;
`;

export const QuantityBoxIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const QuantityBoxValue = styled.p`
  flex: 1;
  text-align: center;
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 400;
`;

export const QuantityBoxPlusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  border-left: 1px solid ${colors.grey};
  cursor: pointer;
`;
