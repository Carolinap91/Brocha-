import React from "react";
import "./NoArtistsFound.css";
import imgError from "../../img/imgError.png";
export const NoArtistsFound = () => {
  return (
    <div className="no-artists-found">
      <h3>no artists matched those filters :(</h3>
      <img src={imgError} alt="nothing found" />
    </div>
  );
};
