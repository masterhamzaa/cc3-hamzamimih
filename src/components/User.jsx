import React from "react";
import { useNavigate } from "react-router-dom";

export default function User(props) {
  const go = useNavigate();
  return (
    <div className="card" key={props.user.id}>
      <img src={props.user.image} alt="Failed to load ressource .." />
      <h3>
        {props.user.firstName} &nbsp; {props.user.lastName}
      </h3>
      <button
        onClick={() => {
          go(`Detail/${props.user.id}`);
        }}
      >
        Detail user
      </button>

      <button
        onClick={() => {
          go(`Carts/${props.user.id}`);
        }}
      >
        Panier
      </button>
    </div>
  );
}
