import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  height: 75px;
  width: 100%;
  background-color: #f2f2f2;
  border-left: 20px solid orange;
  display: flex;
  align-items: center;
  padding: 0 15px;
  right: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 900px) {
    right: 0;
    bottom: 10px;
  }
  .span-one {
    font-weight: bold;
  }
`;
