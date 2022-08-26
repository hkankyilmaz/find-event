import styled from "styled-components";

export const StyledNavDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  background-color: rgb(255, 153, 51, 0.1);
  width: 50%;
  padding: 15px;
  transition-delay: 0.3s;
  transform: translateX(+100%);

  .blue-nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    background-color: rgba(30, 164, 206, 0.2);
    width: 90%;
    padding: 7px;
    transform: translateX(+100%);
    transition-delay: 0.2s;
  }
  .white-nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    background-image: linear-gradient(
      rgba(255, 153, 0, 0.9),
      rgba(255, 153, 0, 0.5),
      white
    );
    width: 95%;
    transform: translateX(+100%);
    transition-delay: 0s;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: ${(props) => props.theme.gutters.xl};
    hr {
      z-index: 999;
      width: 30%;

      border: 1px solid rgba(255, 255, 128, 0.3);
    }
    a {
      color: white;
      text-decoration: none;
      font-size: ${(props) => props.theme.fontSizes.regularBig};
      &:hover {
        color: orange;
      }
    }
    button {
      border: none;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
      align-self: flex-end;
      position: relative;
      right: 20px;
      bottom: 30px;
    }
  }
`;
