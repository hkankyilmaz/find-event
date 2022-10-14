import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const LogoStyle = styled.span`
  font-size: ${(props) => props.theme.fontSizes.regularBig};
  font-weight: bold;
  color: orange;
  font-family: "Chela One", cursive;
  font-size: 2em;
  letter-spacing: 1px;
`;

export const CategoryStyle = styled.span`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-right: ${(props) => props.theme.gutters.smaller};
    &:hover {
      color: orange;
    }
  }
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
