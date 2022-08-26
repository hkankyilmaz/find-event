import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  background-position: center;
  background-size: cover;
  left: 0;
  right: 0;
  top: 140px;
  overflow: hidden;
  z-index: 990;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 6px;
  top: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 998;
`;
