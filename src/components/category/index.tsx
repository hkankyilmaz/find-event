import React from "react";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { Header, StyledGridTwo, StyledGridOne, StyledP } from "./styled";
import EventCard from "../main/event-card";
import { showCategory } from "../../store/features/category/categorySlice";
import { useLocation } from "react-router-dom";

function Category() {
  const param = useParams();
  const aa = param.category;
  const dispatch = useAppDispatch();
  let location = useLocation();

  let InfoEvents = useAppSelector((state) => state.category.tempArr);
  let sayac: number = 0;
  React.useEffect(() => {
    dispatch(showCategory(aa));
  }, [aa]);

  if (InfoEvents.length !== 0) {
    return (
      <Container maxWidth="lg">
        <div style={{ width: "100vw", height: "130px" }}></div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header>TÜM ETKİNLİKLER</Header>
          </Grid>
          {InfoEvents.map((event) => {
            sayac++;
            if (sayac <= 2) {
              return (
                <StyledGridOne<any>
                  style={{
                    height: "325px",
                  }}
                  item
                  xs={12}
                  md={6}
                >
                  <EventCard
                    artist={event.artist}
                    place={event.place}
                    date={event.date.date}
                    openGate={event.date.eventTime}
                    img={event.image}
                    id={event.id}
                  />
                </StyledGridOne>
              );
            }
            if (sayac > 2 && sayac <= 5) {
              if (sayac === 5) {
                sayac = 0;
              }
              return (
                <StyledGridTwo<any> item xs={12} md={4}>
                  <EventCard
                    artist={event.artist}
                    place={event.place}
                    date={event.date.date}
                    openGate={event.date.eventTime}
                    img={event.image}
                    id={event.id}
                  />
                </StyledGridTwo>
              );
            }
          })}
        </Grid>
      </Container>
    );
  } else {
    return (
      <>
        <div style={{ width: "100vw", height: "130px" }}></div>
        <StyledP>Aradağınız Kriterlerde Etkinlik Bulunamadı...</StyledP>;
      </>
    );
  }
}

export default Category;
