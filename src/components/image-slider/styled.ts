import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 40vh;
  margin-top: ${(props) => props.theme.gutters.small};
`;

export const Slide = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  display: flex;
`;

export const NextButton = styled.button`
  position: absolute;
  right: 15px;
  top: 45%;
  background-color: #ffd480;
  border: none;
  z-index: 11;
  padding-right: 5px;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;

export const PreviousButton = styled.button`
  position: absolute;
  left: 15;
  top: 45%;
  background-color: #ffd480;
  border: none;
  z-index: 11;
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;

interface SlideItem {
  img: any;
}

export const SlideItem = styled.div<SlideItem>`
  position: relative;
  height: 100%;
  width: 33vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.theme.gutters.smaller};
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .search {
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      opacity: 1;
      cursor: pointer;
    }
  }

  div {
    height: 15%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.6);

    p {
      color: ${(props) => props.theme.colors.white};
      margin-left: ${(props) => props.theme.gutters.small};
    }
  }
`;
