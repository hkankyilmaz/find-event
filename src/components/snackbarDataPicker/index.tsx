import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import {
  closeAlert,
  showAlert,
} from "../../store/features/datepickeralert/datapickeralertSlice";
import AlertTitle from "@mui/material/AlertTitle";

function SnackBar() {
  let open = useAppSelector((state) => state.dataPicker.open);
  const dispatch = useAppDispatch();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeAlert());
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          <AlertTitle>Bilgi</AlertTitle>
          Tarih Bilgisi Eksik... — <strong>Lütfen Kontrol Edin!</strong>
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default SnackBar;
