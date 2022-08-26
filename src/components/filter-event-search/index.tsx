import React, { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import PlaceIcon from "@mui/icons-material/Place";
import FestivalIcon from "@mui/icons-material/Festival";
import SearchNavigate from "../search-navigate";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { useForm } from "react-hook-form";
import { SubmitButton, Select, WrapperGrid } from "./styled";
import DateRangePicker from "./date-range-picker/index";
import { filterEvent } from "../../store/features/event/eventSlice";
import dayjs from "dayjs";
import { showAlert } from "../../store/features/datepickeralert/datapickeralertSlice";
import { useLocation, useParams } from "react-router-dom";
import { filterEventCategory } from "../../store/features/category/categorySlice";

interface IFormInput {
  city?: string;
  place?: string;
  time?: any;
}

function FilterEvent() {
  const InfoEvents = useAppSelector((state) => state.events.InfoEvents);
  let tempArr = useAppSelector((state) => state.events.tempArr);
  const { register, handleSubmit, watch } = useForm<IFormInput>();
  const watchAllField = watch();
  const [city, setCity] = useState<boolean>(false);
  const [dateValue, setDateValue] = useState<string>("");
  const [valueOne, setValueOne] = React.useState<any>(null);
  const [valueTwo, setValueTwo] = React.useState<any>(null);
  const [datePicker, setDatePicker] = React.useState<any>("Tarih Aralığı");
  const [isOpenRangePicker, setIsOpenRangePicker] = useState<boolean>(false);
  const [innerW, setInnerW] = useState<number>(window.innerWidth);
  const location = useLocation();
  const param = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (valueOne !== null && valueTwo !== null) {
      let date = `${dayjs(valueOne).format("DD/MM")}-${dayjs(valueTwo).format(
        "DD/MM"
      )}
    `;
      setDatePicker(`${date}`);
    }
  }, [valueOne, valueTwo]);

  useEffect(() => {
    if (dateValue == "Tarih Aralığı") {
      setIsOpenRangePicker(true);
    } else {
      setIsOpenRangePicker(false);
    }
  }, [dateValue]);

  window.addEventListener("resize", () => {
    setInnerW(window.innerWidth);
  });

  const onSubmit = (data: IFormInput) => {
    if (data.time === "Tarih Aralığı") {
      data.time = [valueOne, valueTwo];
    }
    if (location.pathname == "/") dispatch(filterEvent(data));
    if (!!param.category) {
      dispatch(filterEventCategory(data));
    }
  };

  let arrCity: string[] = [];
  let arrPlace: string[] = [];

  if (innerW > 900) {
    return (
      <WrapperGrid justifyContent="center" container spacing={2}>
        <form style={{ display: "flex" }} onSubmit={handleSubmit(onSubmit)}>
          <Grid alignItems="center" container item xs="auto">
            Detaylı Arama
          </Grid>
          <Grid alignItems="center" container item xs="auto">
            <PlaceIcon sx={{ marginRight: "5px", color: "orange" }} />

            <Select
              required
              {...register("city", { onChange: () => setCity(true) })}
              name="city"
              id="city"
            >
              <option value="">Şehir Seçin </option>
              {InfoEvents.map((event) => {
                if (!arrCity.includes(event.city)) {
                  arrCity.push(event.city);
                  return <option value={event.city}> {event.city} </option>;
                }
              })}
            </Select>
          </Grid>
          <Grid alignItems="center" container item xs="auto">
            <FestivalIcon sx={{ marginRight: "5px", color: "orange" }} />

            <Select required {...register("place")} name="place" id="place">
              <>
                <option value="">Mekan Seçin </option>

                {InfoEvents.map((event) => {
                  if (
                    watchAllField.city === event.city &&
                    !arrPlace.includes(event.place)
                  ) {
                    arrPlace.push(event.place);
                    return <option value={event.place}> {event.place} </option>;
                  }
                })}
              </>
            </Select>
          </Grid>
          <Grid alignItems="center" container item xs="auto">
            <QueryBuilderIcon sx={{ marginRight: "5px", color: "orange" }} />

            <Select
              required
              value={dateValue}
              {...register("time")}
              onChange={(e) => setDateValue(e.target.value)}
              name="time"
              id="time"
            >
              <option value="">Tarih Seçin </option>
              <option value="Bugün"> Bugün </option>
              <option value="Yarın">Yarın </option>
              <option value="Bu Hafta">Bu Hafta </option>
              <option value="Bu Ay">Bu Ay </option>
              <option value="Tarih Aralığı">{datePicker} </option>
            </Select>
            <DateRangePicker
              valueOne={valueOne}
              valueTwo={valueTwo}
              setValueTwo={setValueTwo}
              setValueOne={setValueOne}
              setIsOpenRangePicker={setIsOpenRangePicker}
              isOpenRangePicker={isOpenRangePicker}
            />
          </Grid>

          <Grid alignItems="center" container item xs="auto"></Grid>

          <SubmitButton type="submit">ARA</SubmitButton>
        </form>
      </WrapperGrid>
    );
  } else {
    return (
      <WrapperGrid container style={{ padding: "0" }}>
        <SearchNavigate />
      </WrapperGrid>
    );
  }
}

export default FilterEvent;
