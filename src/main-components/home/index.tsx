import React from "react";
import Slider from "../../components/image-slider";
import Main from "../../components/main";
import SnackBar from "../../components/snackbarDataPicker";

function Home() {
  return (
    <>
      <div style={{ width: "100vw", height: "130px" }}></div>
      <Slider />
      <Main />
      <SnackBar />
    </>
  );
}

export default Home;
