import React from "react";
import { Container, Grid } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import placedplan from "../../data/images/oturma.jpg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import NumberFormat from "react-number-format";
import {
  setTicketCategory,
  setEventBasket,
} from "../../store/features/basket/basketSlice";

function Ticket() {
  let event = useAppSelector((state) => state.basket.selectedEvent);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [categoryTicket, setCategoryTicket] = React.useState("");

  console.log(event);
  console.log(categoryTicket);

  return (
    <Container maxWidth="lg">
      <div style={{ width: "100%", height: "100px" }}></div>
      <h4 style={{ textAlign: "center" }}>Lütfen Bilet Kategorisini Seçin</h4>
      <Grid
        style={{ flexDirection: "column", alignItems: "center" }}
        container
        spacing={4}
      >
        <Grid item xs={6}>
          <img width="100%" src={placedplan} />
        </Grid>
        <Grid item xs={6}>
          <form>
            <select
              required
              onChange={(e) => setCategoryTicket(e.target.value)}
              style={{ width: "100%", height: "30px", padding: "5px 10px" }}
              name="categories"
            >
              <option>Kategori Seçin</option>
              <option value="Birinci Kategori">
                Birinci Kategori - {event[0]?.ticketsPrices.firstCategory} TL
              </option>
              <option value="İkinci Kategori">
                İkinci Kategori - {event[0]?.ticketsPrices.secondCategory} TL
              </option>
              <option value="Üçüncü Kategori">
                Üçüncü Kategori - {event[0]?.ticketsPrices.thirdCategory} TL
              </option>
            </select>
            <Button
              onClick={() => {
                navigate("/basket");
                dispatch(setTicketCategory(categoryTicket));
                dispatch(setEventBasket());
              }}
              type="submit"
              disabled={categoryTicket == "" ? true : false}
              sx={{
                width: "100%",
                marginTop: "30px",
                color: "white",
                border: "1px solid white",
                borderColor: "red",
                backgroundColor: "red",
                "&:hover": {
                  color: "red",
                  border: "red solid 1px",
                  backgroundColor: "white",
                },
              }}
            >
              DEVAM ET
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Ticket;
