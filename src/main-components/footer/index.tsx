import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { StyledDiv, StyledUl, StyledGrid, WrapperdGrid } from "./styled";

function Footer() {
  return (
    <WrapperdGrid
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "start",
        alignItems: "self-start",
        padding: "70px",
        backgroundColor: "#1EA4CE",
        marginTop: "50px",
      }}
      container
    >
      <StyledGrid
        style={{ flexDirection: "column" }}
        container
        item
        xs={12}
        md="auto"
      >
        <StyledDiv>
          FIND EVENT <hr />
        </StyledDiv>
        <StyledUl>
          <li>
            <Link to="#">Hakkımızda</Link>
          </li>
          <li>
            <Link to="#">Sıkça Sorulanlar</Link>
          </li>
          <li>
            <Link to="#">Kampanyalar</Link>
          </li>
        </StyledUl>
      </StyledGrid>
      <StyledGrid
        style={{ flexDirection: "column" }}
        container
        item
        xs={12}
        md="auto"
      >
        <StyledDiv>
          Bilgilendirme <hr />
        </StyledDiv>
        <StyledUl>
          <li>
            <Link to="#">Satış Noktaları</Link>
          </li>
          <li>
            <Link to="#">Satış Sözleşmesi</Link>
          </li>
          <li>
            <Link to="#">Gizlilik ve Güvenlik</Link>
          </li>
          <li>
            <Link to="#">Üyelik Sözleşmesi</Link>
          </li>
          <li>
            <Link to="#">İletişim</Link>
          </li>
          <li>
            <Link to="#">Kampanyalar</Link>
          </li>
        </StyledUl>
      </StyledGrid>
      <StyledGrid
        style={{ flexDirection: "column" }}
        container
        item
        xs={12}
        md="auto"
      >
        <StyledDiv>
          Bize Ulaşın <hr />
        </StyledDiv>
        <StyledUl>
          <li>
            <Link to="#">Find Event Etkinlik</Link>
          </li>
          <li>
            <Link to="#">Find Event İade</Link>
          </li>
          <li>
            <Link to="#">Find Event Forum</Link>
          </li>
          <li>
            <Link to="#">Find Event Hediye</Link>
          </li>
        </StyledUl>
      </StyledGrid>
    </WrapperdGrid>
  );
}

export default Footer;
