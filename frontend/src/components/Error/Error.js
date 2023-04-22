import React from "react";

import './Error.css';
export const Error = ({ error }) => {
  return (
    <div className="error">
      <h1>{"Algo salió mal :("}</h1>
      <span>{error?.message}</span>
    </div>
  );
};
