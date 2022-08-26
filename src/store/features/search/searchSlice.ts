import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfoEvents, Events } from "../../../data/data";

type InitialState = {
  search: string;
  tempArr: Events[];
};
const initialState: InitialState = {
  search: "",
  tempArr: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, actions: PayloadAction<string>) => {
      state.search = actions.payload;
    },
    setEmptyTempArr: (state) => {
      state.tempArr = [];
    },
    showResult: (state, actions: PayloadAction<string>) => {
      state.tempArr = [];
      InfoEvents.map((event) => {
        if (
          event.city.toUpperCase().includes(actions.payload.toUpperCase()) ||
          event.artist.toUpperCase().includes(actions.payload.toUpperCase()) ||
          event.descriptionOne
            .toUpperCase()
            .includes(actions.payload.toUpperCase())
        ) {
          console.log(actions.payload);
          state.tempArr.push(event);
        }
      });
    },
  },
});

export default searchSlice.reducer;
export const { setSearch, showResult, setEmptyTempArr } = searchSlice.actions;
