import styled from "styled-components";

interface Props {
  width: string;
  height: string;
}

export const SizedBoxContainer = styled.div<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
