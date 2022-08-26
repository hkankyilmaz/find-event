import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { display } from "@mui/system";

interface Imagee {
  img: any;
}

interface Info {}

export const StyledGridUp = styled(Grid)<Imagee>`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 70%;
`;

export const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    opacity: 1;
  }
`;

export const StyledGridDown = styled(Grid)`
  height: 70px;
  background-color: white;
  border-left: 20px solid #ffe5cc;
  padding: ${(props) => props.theme.gutters.small};
  p {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 14px;
  }
`;

export const StyledGridDownLeft = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledGridDownRight = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;
