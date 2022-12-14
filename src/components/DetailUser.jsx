import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailUser() {
  const { id } = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://dummyjson.com/users/${id}`);
      return res.data;
    };

    getData().then((d) => setDetail(d));
  }, [id]);

  let content = "";
  if (detail)
    content = (
      <div className="flexD">
        <span>
          <img src={detail.image} alt="" />
        </span>
        <span>
          Nom Complet:{detail.firstName} {detail.lastName}
        </span>
        <span>Age : {detail.age}</span>
        <span>Genger : {detail.gender}</span>
        <span>Email : {detail.email}</span>
        <span>Telephone : {detail.phone}</span>
        <span>Hauteur : {detail.height}</span>
        <span>Date de Naissance : {detail.birthDate}</span>
        <span>groupe sanguin  : {detail.bloodGroup}</span>
        <span>eyeColor  : {detail.eyeColor}</span>
      </div>
    );
  else content = "Wait...";
  return content;
}
