import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfoEvents, Events } from "../../../data/data";

type InitialState = {
  open: boolean;
};
const initialState: InitialState = {
  open: false,
};

const dataPickerSlice = createSlice({
  name: "dataPicker",
  initialState,
  reducers: {
    showAlert: (state) => {
      state.open = true;
    },
    closeAlert: (state) => {
      state.open = false;
    },
  },
});

export default dataPickerSlice.reducer;
export const { showAlert, closeAlert } = dataPickerSlice.actions;
