import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const Header = styled.h3`
  /* color: ${(props) => props.theme.colors.primary}; */
  color: #ffa34d;
`;

interface Hover {
  isHoverActive: boolean;
  setIsHoverActive: any;
}

export const StyledGridTwo = styled(Grid)<Hover>`
  height: 250px;
  margin-bottom: 13px;
  cursor: pointer;

  @media (max-width: 900px) {
    height: 325px;
  }
`;

export const StyledGridOne = styled(Grid)`
  height: 250px;
  margin-bottom: 13px;
  cursor: pointer;
`;

export const StyledP = styled.p`
  color: orange;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.bigger};
  text-align: center;
  height: auto;
  padding: 150px 0px;
`;
