import React from "react";
import "./NoArtistsFound.css";
import imgError from "../../img/imgError.png";
export const NoArtistsFound = () => {
  return (
    <div className="no-artists-found">
      <h1>no artists matched those filters :(</h1>
      <img src={imgError} alt="nothing found" />
    </div>
  );
};
