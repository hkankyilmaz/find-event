import React, { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import PlaceIcon from "@mui/icons-material/Place";
import FestivalIcon from "@mui/icons-material/Festival";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { useForm } from "react-hook-form";
import { SubmitButton, Select, WrapperGrid, StyledForm } from "./styled";
import DateRangePicker from "../filter-event-search/date-range-picker";
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

function DetailSearch() {
  const InfoEvents = useAppSelector((state) => state.events.InfoEvents);
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

  return (
    <WrapperGrid justifyContent="start-end" container spacing={1}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid
            style={{ marginBottom: "15px" }}
            alignItems="center"
            container
            item
            xs={10}
          >
            <span style={{ fontSize: "20px", color: "orange" }}>
              DETAYLI ARAMA
            </span>
          </Grid>

          <Grid style={{ marginBottom: "15px" }} container item xs={12}>
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
          <Grid
            style={{ marginBottom: "20px" }}
            alignItems="center"
            container
            item
            xs={12}
          >
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
          <Grid
            style={{ marginBottom: "20px" }}
            alignItems="center"
            container
            item
            xs={12}
          >
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

          <SubmitButton type="submit">ARA</SubmitButton>
        </Grid>
      </StyledForm>
    </WrapperGrid>
  );
}

export default DetailSearch;
