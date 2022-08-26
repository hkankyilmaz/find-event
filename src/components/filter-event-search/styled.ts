import { PropaneSharp } from "@mui/icons-material";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  padding-left: ${(props) => props.theme.gutters.small};
  padding-right: ${(props) => props.theme.gutters.small};
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;

export const Select = styled.select`
  width: 120px;
  margin-right: ${(props) => props.theme.gutters.smaller};
  margin-left: ${(props) => props.theme.gutters.smaller};
`;

export const WrapperGrid = styled(Grid)`
  padding: 15px;
  background-color: white;
  margin-bottom: 30px;
  position: fixed;
  left: 0;
  right: 0;
  top: 91px;
  z-index: 77;
`;
