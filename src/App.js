/* HAMZA MIMIH - DEVOWFS203 - CC3 */
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import ListUser from "./components/ListUser";
import DetailUser from "./components/DetailUser";
import ListProduits from "./components/ListProduits";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />}>
          <Route path="Users" element={<ListUser />}>
            <Route path="Detail/:id"  element={<DetailUser />} />
            <Route path="Carts/:id"  element={<ListProduits />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
