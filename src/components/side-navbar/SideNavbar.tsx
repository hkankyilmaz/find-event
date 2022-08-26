import React from "react";
import { StyledNavDiv } from "./styled";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  isOpenSideNav: boolean;
  setIsOpenSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavbar: React.FC<Props> = ({ isOpenSideNav, setIsOpenSideNav }) => {
  const ref = React.useRef<any>();
  const refTwo = React.useRef<any>();
  const refThree = React.useRef<any>();
  console.log(isOpenSideNav);

  React.useEffect(() => {
    document.querySelectorAll("button,a").forEach((el) => {
      el.addEventListener("click", () => {
        setIsOpenSideNav(false);
      });
    });
  });

  React.useEffect(() => {
    if (isOpenSideNav === true) {
      ref.current.style.transform = "translateX(0)";
      refTwo.current.style.transform = "translateX(0)";
      refThree.current.style.transform = "translateX(0)";
    }
    if (isOpenSideNav === false) {
      ref.current.style.transform = "translateX(+100%)";
      refTwo.current.style.transform = "translateX(+100%)";
      refThree.current.style.transform = "translateX(+100%)";
    }
  }, [isOpenSideNav]);

  React.useState(() => {});

  return (
    <StyledNavDiv ref={ref}>
      <div ref={refTwo} className="blue-nav">
        <div ref={refThree} className="white-nav">
          <button>
            <CloseIcon style={{ fontSize: "30px", color: "orange" }} />
          </button>
          <Link to="/">Anasayfa</Link>
          <hr />
          <Link to="/categories/futbol">Futbol</Link>
          <hr />
          <Link to="/categories/muzik"> Müzik</Link>
          <hr />
          <Link to="/categories/sahne"> Sahne</Link>
          <hr />
          <Link to="/categories/spor"> Spor</Link>
          <hr />
          <Link to="/categories/müze"> Müze</Link>
          <hr />
          <Link to="/categories/diğer"> Diğer</Link>
          <hr />
        </div>
      </div>
    </StyledNavDiv>
  );
};

export default SideNavbar;
