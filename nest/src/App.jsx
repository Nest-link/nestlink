import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Auth,
  Contact,
  Home,
  NotFound,
  Payments,
  Property,
  PropertyDetails,
  Reservation,
} from "./pages/Index.js";
import MainLayout from "./layouts/MainLayout.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<Home />} path={`/`} />
        <Route element={<About />} path={`/about`} />
        <Route element={<Auth />} path={`/auth`} />
        <Route element={<Contact />} path={`/contact`} />
        <Route element={<Payments />} path={`/payments`} />
        <Route element={<Property />} path={`/properties`} />
        <Route element={<PropertyDetails />} path={`/proper-detail`} />
        <Route element={<Reservation />} path={`/reserve`} />
      </Route>
      <Route element={<NotFound />} path={`*`} />
    </Routes>
  );
};

export default App;
