import { PropaneSharp } from "@mui/icons-material";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 15px;
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
  padding: 10px;
  border: none;
  width: 90%;
  margin-right: ${(props) => props.theme.gutters.smaller};
  margin-left: ${(props) => props.theme.gutters.smaller};
`;

export const WrapperGrid = styled(Grid)`
  padding: 15px;
  background-color: transparent;
  margin-bottom: 30px;
  position: fixed;
  left: 0;
  right: 0;
  top: 150px;
  z-index: 77;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;
