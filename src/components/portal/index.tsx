import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import FilterEvent from "../filter-event-search";
import { CloseButton, StyledContainer } from "./styled";
import CloseIcon from "@mui/icons-material/Close";
import DetailSearch from "../search-detail";

interface props {
  isOpenPortal: boolean;
  setIsOpenPortal: (open: boolean) => void;
}

const Portal: React.FC<props> = ({ isOpenPortal, setIsOpenPortal }) => {
  if (!isOpenPortal) {
    return null;
  } else {
    return createPortal(
      <StyledContainer>
        <DetailSearch />
        <CloseButton
          onClick={(e) => {
            e.preventDefault();
            setIsOpenPortal(false);
          }}
        >
          <CloseIcon style={{ color: "orange", fontSize: "25px" }} />
        </CloseButton>
      </StyledContainer>,
      document.getElementById("portal") as HTMLElement
    );
  }
};

export default Portal;
