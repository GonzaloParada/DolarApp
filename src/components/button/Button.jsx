import React from "react";
import "./Button.css";

export const Button = ({ type, source, setSource }) => {
  return (
    <button
      className={type === source ? "btn btn-active" : "btn"}
      onClick={() => setSource(type)}
    >
      {type}
    </button>
  );
};
