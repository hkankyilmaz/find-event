import React from "react";
import { StyledHeader } from "./styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LogoNavigate from "../../components/header-logo-navigate";
import SearchNavigate from "../../components/search-navigate";
import MenuIcon from "@mui/icons-material/Menu";
import SideNavbar from "../../components/side-navbar/SideNavbar";

function Header() {
  const [innerW, setInnerW] = React.useState<number>(window.innerWidth);
  const [isOpenSideNav, setIsOpenSideNav] = React.useState<boolean>(false);

  window.addEventListener("resize", () => {
    setInnerW(window.innerWidth);
  });

  if (innerW > 900) {
    return (
      <StyledHeader>
        <Container>
          <Grid container>
            <Grid
              columnSpacing={2}
              container
              item
              alignItems="center"
              justifyContent="flex-start"
              xs={6}
            >
              <LogoNavigate />
            </Grid>
            <Grid
              columnSpacing={2}
              container
              item
              alignItems="center"
              justifyContent="flex-end"
              xs={6}
            >
              <SearchNavigate />
            </Grid>
          </Grid>
        </Container>
      </StyledHeader>
    );
  } else {
    return (
      <StyledHeader>
        <Container>
          <Grid container>
            <Grid
              columnSpacing={2}
              container
              item
              alignItems="center"
              justifyContent="flex-start"
              xs={6}
            >
              <LogoNavigate />
            </Grid>
            <Grid
              columnSpacing={2}
              container
              item
              alignItems="center"
              justifyContent="flex-end"
              xs={6}
            >
              <MenuIcon
                onClick={() => {
                  setIsOpenSideNav(true);
                }}
                style={{ color: "white", cursor: "pointer" }}
                fontSize="large"
              />
            </Grid>
          </Grid>
        </Container>
        <SideNavbar
          isOpenSideNav={isOpenSideNav}
          setIsOpenSideNav={setIsOpenSideNav}
        />
      </StyledHeader>
    );
  }
}

export default Header;
