import { Hidden } from "@mui/material";
import styled from "styled-components";

type RangePicker = {
  isOpenRangePicker: boolean;
};

export const StyledDiv = styled.div<RangePicker>`
  position: absolute;
  background-color: white;
  padding: 30px;
  top: 150%;
  left: 50%;
  transform: translateX(-50%);

  visibility: ${(props) => (props.isOpenRangePicker ? "visible" : "hidden")};

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    top: 110%;
  }
`;

export const StyledButton = styled.button`
  margin-right: 10px;
  padding: 12px 20px;
  background-color: white;
  border-color: orange;
  border: 1px solid orange;
  cursor: pointer;
`;
