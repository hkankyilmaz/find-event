import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Events } from "../../../data/data";

type InitialState = {
  basketPrize: number;
  event: Events[];
  ticketCategory: string;
  selectedEvent: Events[];
};
const initialState: InitialState = {
  basketPrize: 0,
  event: [],
  ticketCategory: "",
  selectedEvent: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setPrize: (state, action: PayloadAction<number>) => {
      state.basketPrize += action.payload;
    },
    setEventBasket: (state) => {
      state.event.push(state.selectedEvent[0]);
      state.selectedEvent = [];
    },
    setSelectedEvent: (state, action: PayloadAction<Events>) => {
      state.selectedEvent.push(action.payload);
    },
    setTicketCategory: (state, action: PayloadAction<string>) => {
      state.selectedEvent[0].selectTicket = action.payload;
    },
  },
});

export default basketSlice.reducer;
export const { setPrize, setEventBasket, setTicketCategory, setSelectedEvent } =
  basketSlice.actions;
