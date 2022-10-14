import React from "react";
import { Grid, Container } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import NumberFormat from "react-number-format";
import Button from "@mui/material/Button";
import { StyledDiv } from "./styled";
import { useNavigate } from "react-router-dom";
import { removeEventBasket } from "../../store/features/basket/basketSlice";

function Basket() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    console.log(event);
  });
  const event = useAppSelector((state) => state.basket.event);
  console.log(event);

  return (
    <Container maxWidth="lg">
      <div style={{ width: "100vw", height: "130px" }}></div>
      <h4 style={{ color: "orange", textAlign: "end" }}>
        Sepetinizde {event.length} Etkinlik Bileti Bulunmaktadır.
      </h4>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{
            visibility: event.length > 0 ? "visible" : "hidden",
            marginBottom: "60px",
            width: "150px",
            color: "white",
            backgroundColor: "red",
            border: "1px solid white",
            "&:hover": {
              color: "red",
              border: "1px solid red",
              backgroundColor: "white",
            },
          }}
        >
          HEPSİNİ SATIN AL
        </Button>
      </div>
      {event.map((item) => (
        <Grid container spacing={3}>
          <Grid container item>
            <Grid item xs={12} md={4}>
              <img
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                width="100%"
                src={item.image}
              />
            </Grid>
            <Grid
              style={{ display: "flex", alignItems: "center" }}
              item
              xs={12}
              md={8}
            >
              <StyledDiv className="info-container">
                <Grid
                  style={{ display: "flex", justifyContent: "space-between" }}
                  container
                >
                  <Grid
                    style={{ display: "flex", flexDirection: "column" }}
                    container
                    item
                    xs="auto"
                  >
                    <Grid item>
                      <span className="span-one">{item.artist}</span>
                    </Grid>
                    <Grid item>
                      <span>{item.place}</span>
                    </Grid>
                  </Grid>
                  <Grid
                    style={{ display: "flex", flexDirection: "column" }}
                    container
                    item
                    xs="auto"
                  >
                    <Grid item>
                      <span className="span-one">{item.date.date}</span>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </StyledDiv>
            </Grid>
          </Grid>
          <Grid spacing={2} container item>
            <Grid style={{ marginBottom: "10px" }} item xs={12}>
              <h4>Bilet Bilgileri </h4>
              <hr />
            </Grid>
            <Grid container spacing={1} xs={12} md="auto" item>
              <Grid container item xs={6} md={12}>
                <span style={{ fontWeight: "bold" }}>Kategori</span>
              </Grid>
              <Grid container item xs={6} md={12}>
                {item.selectTicket}
              </Grid>
            </Grid>
            <Grid spacing={1} container xs={12} md="auto" item>
              <Grid container item xs={6} md={12}>
                <span style={{ fontWeight: "bold" }}>Tribün</span>
              </Grid>
              <Grid container item xs={6} md={12}>
                -
              </Grid>
            </Grid>

            <Grid container spacing={1} xs={12} md="auto" item>
              <Grid container item xs={6} md={12}>
                <span style={{ fontWeight: "bold" }}>Koltuk</span>
              </Grid>
              <Grid container item xs={6} md={12}>
                -
              </Grid>
            </Grid>
            <Grid container spacing={1} xs={12} md="auto" item>
              <Grid container item xs={6} md={12}>
                <span style={{ fontWeight: "bold" }}>Bilet Bedeli</span>
              </Grid>
              <Grid container item xs={6} md={12}>
                {(() => {
                  if (item.selectTicket == "Birinci Kategori") {
                    return (
                      <NumberFormat
                        value={item.ticketsPrices.firstCategory}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₺"}
                        style={{ marginLeft: "10px" }}
                      />
                    );
                  }
                  if (item.selectTicket == "İkinci Kategori") {
                    return (
                      <NumberFormat
                        value={item.ticketsPrices.secondCategory}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₺"}
                        style={{ marginLeft: "10px" }}
                      />
                    );
                  }
                  if (item.selectTicket == "Üçüncü Kategori") {
                    return (
                      <NumberFormat
                        value={item.ticketsPrices.thirdCategory}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₺"}
                        style={{ marginLeft: "10px" }}
                      />
                    );
                  }
                  return null;
                })()}
              </Grid>
            </Grid>
            <Grid container spacing={1} xs={12} md="auto" item>
              <Grid container item xs={6} md={12}>
                <span style={{ fontWeight: "bold" }}>Servis Bedeli</span>
              </Grid>
              <Grid container item xs={6} md={12}>
                <NumberFormat
                  value={12}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₺"}
                  style={{ marginLeft: "10px" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} xs={12} md="auto" item>
              <Grid container item xs={6} md={12}>
                <span style={{ fontWeight: "bold" }}>Toplam Tutar</span>
              </Grid>
              <Grid container item xs={6} md={12}>
                {(() => {
                  if (item.selectTicket == "Birinci Kategori") {
                    return (
                      <NumberFormat
                        value={item.ticketsPrices.firstCategory + 12}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₺"}
                        style={{ marginLeft: "10px" }}
                      />
                    );
                  }
                  if (item.selectTicket == "İkinci Kategori") {
                    return (
                      <NumberFormat
                        value={item.ticketsPrices.secondCategory + 12}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₺"}
                        style={{ marginLeft: "10px" }}
                      />
                    );
                  }
                  if (item.selectTicket == "Üçüncü Kategori") {
                    return (
                      <NumberFormat
                        value={item.ticketsPrices.thirdCategory + 12}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₺"}
                        style={{ marginLeft: "10px" }}
                      />
                    );
                  }
                  return null;
                })()}
              </Grid>
            </Grid>
            <Grid container spacing={1} xs={12} md="auto" item>
              <Grid container item xs={6} md={12}>
                <span style={{ fontWeight: "bold" }}>İşlem</span>
              </Grid>
              <Grid container item xs={6} md={12}>
                <Button
                  onClick={() => dispatch(removeEventBasket(item))}
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    border: "1px solid white",
                    "&:hover": {
                      color: "red",
                      border: "1px solid red",
                      backgroundColor: "white",
                    },
                  }}
                >
                  Sil
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <hr
            style={{ width: "100%", marginTop: "20px", marginLeft: "16px" }}
          />
          <Grid
            style={{
              padding: "0 30px",
              marginTop: "30px",
              justifyContent: "center",
            }}
            container
          >
            <Grid item xs="auto" md="auto">
              <Button
                onClick={() => navigate("/")}
                sx={{
                  marginBottom: "60px",
                  width: "150px",
                  marginRight: "10px",
                  color: "white",
                  backgroundColor: "orange",
                  border: "1px solid white",
                  "&:hover": {
                    color: "red",
                    border: "1px solid red",
                    backgroundColor: "white",
                  },
                }}
              >
                Bilet Ekle
              </Button>
            </Grid>
            <Grid item xs="auto" md="auto">
              <Button
                sx={{
                  marginBottom: "60px",
                  width: "150px",
                  color: "white",
                  backgroundColor: "orange",
                  border: "1px solid white",
                  "&:hover": {
                    color: "red",
                    border: "1px solid red",
                    backgroundColor: "white",
                  },
                }}
              >
                Satın Al
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}

export default Basket;
