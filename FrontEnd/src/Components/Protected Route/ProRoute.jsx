import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProRoute = (props) => {
  const { Component } = props;

  const nevigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      nevigate("/");
    }
  });
  return (
    <>
      <Component />
    </>
  );
};

export default ProRoute;
