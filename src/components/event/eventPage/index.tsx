import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useAppSelector, useAppDispatch } from "../../../store/hook";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import NumberFormat from "react-number-format";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlacedPlan from "../../../data/images/oturma.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import { setSelectedEvent } from "../../../store/features/basket/basketSlice";
import {
  StyledDivIconWrapper,
  StyledDivImageWrapper,
  StyledPDes,
  StyledPFirst,
  StyledPThree,
  StyledPTwo,
  StyledPFour,
  StyledSpanNav,
  StyledPFive,
  StyledDivDesTwo,
  StyledPSix,
  StyledPSeven,
  StyledButton,
} from "./styled";

function EventPage() {
  let location = useLocation();
  const [event, setEvents] = React.useState<any>();
  const dispatch = useAppDispatch();
  const InfoEvents = useAppSelector((state) => state.events.InfoEvents);
  let navigate = useNavigate();
  let currentId: any = location.pathname.match(/(?<=-)\d+(?! )/g);
  let currentUrl: string = location.pathname.replaceAll(" ", "-");
  currentId = +currentId[0];
  let desTwo: any = event?.descriptionTwo.match(/(?<=-)(.*)(?=.)/g);

  const eventy = useAppSelector((state) => state.basket.selectedEvent);
  console.log(eventy);

  React.useEffect(() => {
    InfoEvents.map((item): any => {
      if (item.id === currentId) {
        setEvents(item);
      }
    });
  }, [currentId]);

  return (
    <>
      <div style={{ height: "120px" }}></div>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid container item spacing={1} xs={12} md={6}>
            <Grid item xs={12}>
              <StyledSpanNav>
                Ana Sayfa / {event?.category} / {event?.type} / {event?.artist}
              </StyledSpanNav>
            </Grid>
            <Grid
              style={{ display: "flex", alignItems: "center", color: "orange" }}
              item
              xs={12}
              md={6}
            >
              ETKİNLİK DETAYLARI
            </Grid>
            <StyledDivIconWrapper
              style={{ alignItems: "center" }}
              item
              xs={12}
              md={6}
            >
              <Stack spacing={2} direction="row">
                <Button
                  style={{ color: "black", borderColor: "#b3b3b3" }}
                  variant="outlined"
                >
                  <FacebookIcon />
                </Button>
                <Button
                  style={{ color: "black", borderColor: "#b3b3b3" }}
                  variant="outlined"
                >
                  <TwitterIcon />
                </Button>
                <Button
                  style={{ color: "black", borderColor: "#b3b3b3" }}
                  variant="outlined"
                >
                  <InstagramIcon />
                </Button>
              </Stack>
            </StyledDivIconWrapper>
            <StyledDivImageWrapper
              img={event?.image}
              item
              xs={12}
            ></StyledDivImageWrapper>
            <Grid item xs={12}>
              <StyledPDes>{event?.descriptionOne}</StyledPDes>
            </Grid>
            <Grid item xs={12}>
              <StyledDivDesTwo>
                <p style={{ color: "orange" }}>Not Alın...</p>
                {desTwo?.map((text: any) => (
                  <p>-{text}. </p>
                ))}
              </StyledDivDesTwo>
            </Grid>
          </Grid>
          <Grid container item spacing={2} xs={12} md={6}>
            <Grid item md={6} xs={12}>
              <StyledPFirst style={{ marginTop: "90px" }}>
                Bilet Bilgisi
              </StyledPFirst>

              <StyledPTwo>
                <CalendarMonthIcon /> Tarih
              </StyledPTwo>
              <hr />
              <StyledPThree>
                {" "}
                {event?.date.date} / {event?.date.eventTime}{" "}
              </StyledPThree>
              <hr />
              <StyledPFour># Kategori</StyledPFour>
              <hr />
              <StyledPFive>
                {" "}
                Birinci Kategori
                <NumberFormat
                  value={event?.ticketsPrices.firstCategory}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₺"}
                  style={{ marginLeft: "10px" }}
                />
              </StyledPFive>
              <hr />
              <StyledPFive>
                {" "}
                İkinci Kategori
                <NumberFormat
                  value={event?.ticketsPrices.secondCategory}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₺"}
                  style={{ marginLeft: "10px" }}
                />
              </StyledPFive>
              <hr />
              <StyledPFive>
                {" "}
                Üçüncü Kategori
                <NumberFormat
                  value={event?.ticketsPrices.thirdCategory}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₺"}
                  style={{ marginLeft: "10px" }}
                />
              </StyledPFive>
              <hr />
              <StyledPTwo>
                {" "}
                <LocationOnIcon /> Mekan
              </StyledPTwo>
              <hr />
              <StyledPSix> {event?.place} </StyledPSix>
              <StyledPSeven>
                {" "}
                <a
                  style={{ color: "black", fontWeight: "bold" }}
                  href={event?.map}
                  target="blank_"
                >
                  {" "}
                  Haritada Göster{" "}
                </a>{" "}
              </StyledPSeven>
              <StyledPTwo>Oturma Planı</StyledPTwo>

              <hr />
              <img
                style={{ marginTop: "10px" }}
                width="100%"
                src={PlacedPlan}
              />
              <StyledButton
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setSelectedEvent(event));
                  navigate(`/ticket${currentUrl}`);
                }}
                sx={{
                  color: "white",
                  borderColor: "red",
                  backgroundColor: "red",
                  "&:hover": {
                    color: "red",
                    borderColor: "red",
                    backgroundColor: "white",
                  },
                }}
                variant="outlined"
              >
                SATIN AL
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default EventPage;
