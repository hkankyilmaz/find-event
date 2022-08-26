import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfoEvents, Events } from "../../../data/data";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween.js";

let now = dayjs();
dayjs.extend(isBetween);

let tomorrow = dayjs().add(1, "day");
let startWeek = dayjs().startOf("week");
let endOfWeek = dayjs().endOf("week");
let startOfMonth = dayjs().startOf("month");
let endOfMonth = dayjs().endOf("month");

type InitialState = {
  firstArr: Events[];
  tempArr: Events[];
};
const initialState: InitialState = {
  firstArr: [],
  tempArr: [],
};
type FilterEvent = {
  city?: string | null;
  place?: string | null;
  time?: any | any[] | null;
  category?: string | null;
  type?: string | null;
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setEmptyTempArr: (state) => {
      state.tempArr = [];
    },
    showCategory: (state, actions: PayloadAction<any>) => {
      state.tempArr = [];
      state.firstArr = [];
      InfoEvents.map((event) => {
        if (
          event.category.toUpperCase().includes(actions.payload.toUpperCase())
        ) {
          console.log(actions.payload);
          state.tempArr.push(event);
          state.firstArr.push(event);
        }
      });
    },
    filterEventCategory: (state, action: PayloadAction<FilterEvent>) => {
      state.tempArr = [];
      state.firstArr.map((event) => {
        if (
          event.city == action.payload?.city &&
          event.place == action.payload?.place
        ) {
          switch (action.payload?.time) {
            case "Bugün":
              if (event.date.dateDatejs.isSame(now)) {
                state.tempArr.push(event);
              }

              break;
            case "Bu Hafta":
              if (event.date.dateDatejs.isBetween(now, endOfWeek)) {
                state.tempArr.push(event);
              }

              break;
            case "Yarın":
              if (event.date.dateDatejs.isSame(tomorrow)) {
                state.tempArr.push(event);
              }

              break;
            case "Bu Ay":
              if (event.date.dateDatejs.isBetween(now, endOfMonth)) {
                state.tempArr.push(event);
              }

              break;
            default:
              if (
                action.payload.time[0] != null &&
                action.payload.time[1] != null &&
                dayjs().isBetween(
                  dayjs(action.payload.time[0]),
                  dayjs(action.payload.time[1])
                )
              ) {
                state.tempArr.push(event);
              }
          }
        }
      });
    },
  },
});

export default categorySlice.reducer;
export const { showCategory, setEmptyTempArr, filterEventCategory } =
  categorySlice.actions;
