import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  overflow: hidden;
`;
