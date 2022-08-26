import { StringifyOptions } from "querystring";
import React from "react";
import Grid from "@mui/material/Grid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import {
  StyledGridUp,
  StyledGridDown,
  StyledGridDownLeft,
  StyledGridDownRight,
  SearchDiv,
} from "./styled";
import { useNavigate } from "react-router-dom";

function EventCard(props: {
  artist: string;
  place: string;
  date: any;
  openGate: any;
  img: any;
  id: number;
}) {
  const navigate = useNavigate();
  return (
    <>
      <StyledGridUp
        onClick={() =>
          navigate(`/event/${props.artist.replaceAll(" ", "-")}-${props.id}`)
        }
        item
        img={props.img}
        xs={12}
      >
        <SearchDiv>
          <SearchIcon sx={{ color: "white", fontSize: "50px", zIndex: "2" }} />
          <span style={{ zIndex: "2" }}>Detaylı İncele</span>
        </SearchDiv>
      </StyledGridUp>
      <StyledGridDown
        style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        container
        item
        xs={12}
      >
        <StyledGridDownLeft
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
          container
          item
          xs={6}
        >
          <p style={{ fontWeight: "bold" }}>{props.artist} </p>
          <p>
            <PlaceIcon style={{ color: "red" }} fontSize="small" />{" "}
            {props.place}{" "}
          </p>
        </StyledGridDownLeft>
        <StyledGridDownRight
          style={{ flexDirection: "column" }}
          container
          item
          xs={6}
        >
          <p>
            <CalendarMonthIcon style={{ color: "red" }} fontSize="small" />{" "}
            {props.date}
          </p>
          <p>{props.openGate} </p>
        </StyledGridDownRight>
      </StyledGridDown>
    </>
  );
}

export default EventCard;
