import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfoEvents, Events } from "../../../data/data";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween.js";
import { Console } from "console";

let now = dayjs();
dayjs.extend(isBetween);

let tomorrow = dayjs().add(1, "day");
let startWeek = dayjs().startOf("week");
let endOfWeek = dayjs().endOf("week");
let startOfMonth = dayjs().startOf("month");
let endOfMonth = dayjs().endOf("month");

type FilterEvent = {
  city?: string | null;
  place?: string | null;
  time?: any | any[] | null;
  category?: string | null;
  type?: string | null;
};

type InitialState = {
  ticketNumber: number;
  InfoEvents: Events[];
  SelectedEvents: Events[];
  tempArr: Events[];
};
const initialState: InitialState = {
  ticketNumber: 0,
  InfoEvents,
  SelectedEvents: [],
  tempArr: InfoEvents,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    showEvents: (state) => {
      state.tempArr = InfoEvents;
    },
    filterEvent: (state, action: PayloadAction<FilterEvent>) => {
      state.tempArr = [];
      state.InfoEvents.map((event) => {
        if (
          event.city == action.payload?.city &&
          event.place == action.payload?.place
        ) {
          switch (action.payload?.time) {
            case "Bugün":
              if (event.date.dateDatejs.isSame(now, "day")) {
                state.tempArr.push(event);
              }

              break;
            case "Bu Hafta":
              if (event.date.dateDatejs.isBetween(now, endOfWeek, "day")) {
                state.tempArr.push(event);
              }

              break;
            case "Yarın":
              if (event.date.dateDatejs.isSame(tomorrow, "day")) {
                state.tempArr.push(event);
              }

              break;
            case "Bu Ay":
              if (event.date.dateDatejs.isBetween(now, endOfMonth, "day")) {
                state.tempArr.push(event);
              }

              break;
            default:
              if (
                action.payload.time[0] != null &&
                action.payload.time[1] != null &&
                event.date.dateDatejs.isBetween(
                  dayjs(action.payload.time[0]).subtract(1, "day"),
                  dayjs(action.payload.time[1]).add(1, "day"),
                  "day"
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

export default eventsSlice.reducer;
export const { showEvents, filterEvent } = eventsSlice.actions;
