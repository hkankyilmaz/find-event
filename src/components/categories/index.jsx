import React from "react";
import FilterEevent from "../filter-event-search";
import { Outlet } from "react-router-dom";

function Categories() {
  return (
    <>
      <FilterEevent />
      <Outlet />
    </>
  );
}

export default Categories;
