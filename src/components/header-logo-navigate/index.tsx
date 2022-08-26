import React from "react";
import Grid from "@mui/material/Grid";
import { Link, NavLink } from "react-router-dom";
import { LogoStyle, CategoryStyle, StyledButton } from "./styled";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../side-navbar/SideNavbar";

function LogoNavigate() {
  const [innerW, setInnerW] = React.useState<number>(window.innerWidth);
  const navigate = useNavigate();
  window.addEventListener("resize", () => {
    setInnerW(window.innerWidth);
  });

  if (innerW > 900) {
    return (
      <>
        <Grid item xs="auto">
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <LogoStyle>FIND EVENT</LogoStyle>
          </StyledButton>
        </Grid>
        <Grid item xs>
          <CategoryStyle>
            <Link to="/categories/futbol">Futbol</Link>
            <Link to="/categories/muzik"> Müzik</Link>
            <Link to="/categories/sahne"> Sahne</Link>
            <Link to="/categories/spor"> Spor</Link>
            <Link to="/categories/müze"> Müze</Link>
            <Link to="/categories/diğer"> Diğer</Link>
          </CategoryStyle>
        </Grid>
      </>
    );
  } else {
    return (
      <Grid item xs="auto">
        <StyledButton
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <LogoStyle>FIND EVENT</LogoStyle>
        </StyledButton>
      </Grid>
    );
  }
}

export default LogoNavigate;
