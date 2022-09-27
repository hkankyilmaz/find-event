import React, { useEffect, useRef } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StyledDiv, StyledButton } from "./styled";
import CheckIcon from "@mui/icons-material/Check";
import { useAppSelector, useAppDispatch } from "../../../store/hook";
import { showAlert } from "../../../store/features/datepickeralert/datapickeralertSlice";
import dayjs from "dayjs";

interface props {
  isOpenRangePicker: boolean;
  setIsOpenRangePicker: React.Dispatch<React.SetStateAction<boolean>>;
  valueOne: string;
  setValueOne: React.Dispatch<React.SetStateAction<string>>;
  setValueTwo: React.Dispatch<React.SetStateAction<string>>;
  valueTwo: string;
}

const DateRangePicker: React.FC<props> = ({
  isOpenRangePicker,
  setIsOpenRangePicker,
  valueOne,
  valueTwo,
  setValueOne,
  setValueTwo,
}) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  return (
    <StyledDiv isOpenRangePicker={isOpenRangePicker}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Başlangıç Tarihi Seçin"
          value={valueOne}
          onChange={(newValue: any) => {
            setValueOne(newValue);
          }}
          renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
            <TextField
              {...params}
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "orange",
                },
                "& .MuiInputBase-root": {
                  marginRight: "10px",
                  marginBottom: "10px",
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Bitiş Tarihini Seçin"
          value={valueTwo}
          onChange={(newValue: any) => {
            setValueTwo(newValue);
          }}
          renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
            <TextField
              {...params}
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "orange",
                },
                "& .MuiInputBase-root": {
                  marginRight: "10px",
                  marginBottom: "10px",
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
      <StyledButton
        onClick={(e) => {
          e.preventDefault();
          if (valueOne !== null && valueTwo !== null) {
            setIsOpenRangePicker(false);
          } else {
            dispatch(showAlert());
          }
        }}
      >
        <CheckIcon style={{ color: "orange" }} />
      </StyledButton>
    </StyledDiv>
  );
};

export default DateRangePicker;
