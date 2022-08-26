import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const StyledDiv = styled.p`
  text-align: start;
  width: 150px;
  color: white;
  font-weight: bold;
  hr {
    border-top: 2px solid orange;
  }
`;
export const StyledUl = styled.ul`
  list-style-type: none;
  margin-right: 30px;
  width: 150px;

  li {
    text-align: start;

    a {
      text-decoration: none;
      font-size: 13px;
      color: white;
      &:hover {
        color: orange;
      }
    }
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperdGrid = styled(Grid)`
  background-image: linear-gradient(to right, #1ea4ce, #ffd9b3);
`;
