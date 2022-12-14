import React, { useEffect } from "react";
import { getUsers } from "../redux/UserSlice";
import { getCarts } from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";

import { Outlet } from "react-router-dom";

export default function ListUser() {
  const data = useSelector((state) => state.users.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCarts());
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="list">
          {data.map((item, index) => {
            return <User user={item} key={index} />;
          })}
        </div>
        <div className="static">
          <Outlet />
        </div>
      </div>
    </>
  );
}
