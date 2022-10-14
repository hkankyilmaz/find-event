import React from "react";
import Header from "./main-components/header";
import Home from "./main-components/home";
import { theme, GlobalStyle } from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterEvent from "./components/filter-event-search";
import Footer from "./main-components/footer";
import Search from "./components/searchText";
import Categories from "./components/categories";
import Category from "./components/category";
import Event from "./components/event";
import EventPage from "./components/event/eventPage";
import Basket from "./components/basket";
import Ticket from "./components/ticket/ticket";
import ScrollToTop from "./util/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FilterEvent />
                  <Home />
                </>
              }
            />
            <Route
              path="/search"
              element={
                <>
                  <Search />
                </>
              }
            />
            <Route path="/categories" element={<Categories />}>
              <Route path=":category" element={<Category />} />
            </Route>
            <Route path="/event" element={<Event />}>
              <Route path=":event" element={<EventPage />} />
            </Route>
            <Route path="/basket" element={<Basket />} />
            <Route path="/ticket/:event/:artist" element={<Ticket />} />
          </Routes>

          <Footer />
          <GlobalStyle />
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
