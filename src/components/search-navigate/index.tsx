import React from "react";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { StyleText, StyleInput, StyledButton, DetailButton } from "./styled";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import TuneIcon from "@mui/icons-material/Tune";
import Badge from "@mui/material/Badge";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { showResult } from "../../store/features/search/searchSlice";
import { Button } from "@mui/material";
import Portal from "../portal";

function SearchNavigate() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const event = useAppSelector((state) => state.basket.event);
  const [search, setSearch] = React.useState("");
  const [innerW, setInnerW] = React.useState(window.innerWidth);
  const [isOpenPortal, setIsOpenPortal] = React.useState(false);

  window.addEventListener("resize", () => {
    setInnerW(window.innerWidth);
  });

  if (innerW > 900) {
    return (
      <>
        <Grid item xs="auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(showResult(search));
              setSearch("");

              navigate("/search");
            }}
          >
            <StyleInput>
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                placeholder="Sanatçı/Şehir/Mekan"
              />
              <StyledButton type="submit" onSubmit={(e) => {}}>
                <SearchIcon style={{ color: "rgba(0, 0, 0)" }} />
              </StyledButton>
            </StyleInput>
          </form>
        </Grid>
        <Grid container alignItems="center" item xs="auto">
          <Badge
            style={{ marginRight: "5px" }}
            badgeContent={event.length}
            color="secondary"
          >
            <ShoppingBasketIcon
              style={{
                color: "orange",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/basket");
              }}
            />
          </Badge>
          <PersonIcon sx={{ color: "orange" }} />{" "}
          <StyleText>Giriş Yap / Üye Ol</StyleText>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid item xs={11}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(showResult(search));
              setSearch("");

              navigate("/search");
            }}
          >
            <StyleInput>
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                placeholder="Sanatçı/Şehir/Mekan"
              />
              <StyledButton type="submit" onSubmit={(e) => {}}>
                <SearchIcon style={{ color: "rgba(0, 0, 0)" }} />
              </StyledButton>
            </StyleInput>
          </form>
        </Grid>
        <Grid item xs={1}>
          <DetailButton
            onClick={(e) => {
              e.preventDefault();
              switch (isOpenPortal) {
                case false:
                  setIsOpenPortal(true);

                  break;
                case true:
                  setIsOpenPortal(false);
                  break;
              }
            }}
          >
            <TuneIcon style={{ color: "orange" }} />
          </DetailButton>
        </Grid>
        <Portal isOpenPortal={isOpenPortal} setIsOpenPortal={setIsOpenPortal} />
      </>
    );
  }
}

export default SearchNavigate;
