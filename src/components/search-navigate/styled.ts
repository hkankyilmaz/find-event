import styled from "styled-components";
import { theme } from "../../theme";

export const StyleText = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

export const StyleInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 32px;
  input {
    border: none;
    height: 100%;
    border-radius: ${(props) => props.theme.radius.small};
    padding: 0;
    padding-left: 5px;
  }
  input:focus {
    outline: none;
  }
  @media (max-width: 900px) {
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const StyledButton = styled.button`
  background-color: white;
  border: none;
  height: 100%;
  padding: 0;
  margin: 0;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;

export const DetailButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
