import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Acceuil() {
  const go = useNavigate();
  useEffect(() => {
    go("/Users");
  }, []);
  return (
    <div className="container">
      <div
        style={{
          height: "5vh",
          background: "blueviolet",
          borderRadius: "8px",
          color: "white",
        }}
      >
        <center>
          <i>Gestion des Posts</i>
        </center>
      </div>

      <Outlet />
    </div>
  );
}
