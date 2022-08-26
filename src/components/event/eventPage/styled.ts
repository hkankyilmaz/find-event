import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export const StyledSpanNav = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: #595959;
`;

export const StyledDivIconWrapper = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 900px) {
    position: relative;
    bottom: 10px;
  }
`;

interface Img {
  img: any;
}

export const StyledDivImageWrapper = styled(Grid)<Img>`
  background: url(${(props) => props.img});
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding-left: 0;
`;

export const StyledPDes = styled.p`
  letter-spacing: 0.3px;
  line-height: 1.3;
`;

export const StyledPFirst = styled.p`
  font-weight: bold;
`;
export const StyledPTwo = styled.p`
  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.regular};
`;
export const StyledPThree = styled.p`
  display: flex;
  color: #8c8c8c;
  align-items: center;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.regular};
`;

export const StyledPFour = styled.p`
  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.regular};
`;

export const StyledPFive = styled.p`
  color: #8c8c8c;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.regular};
`;

export const StyledPSix = styled.p`
  color: #ff0080;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const StyledPSeven = styled.p`
  color: black;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const StyledDivDesTwo = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid orange;
  padding: 20px;
`;

export const StyledButton = styled(Button)`
  color: white;
  width: 100%;
  height: 50px;
  position: relative;
  top: 15px;
  border-color: red;
  background-color: red;
`;
