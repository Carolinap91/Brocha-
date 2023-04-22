import React from "react";
import "./ArtistView.css";
import photo1 from "../../img/icons/igIcon.png";
import photo2 from "../../img/icons/fbIcon.png";
import photo3 from "../../img/icons/twitterIcon.png";
import photo4 from "../../img/icons/wwwIcon.png";

export const ArtistView = (props) => {
  const { artist } = props;
  const photos = [photo1, photo2, photo3, photo4];
  return (
    <div className="">
      <h3>{artist.name}</h3>
      <p> {artist.description}. </p>
      {photos.map((photo) => (
        <img className="imgLogos" src={photo} />
      ))}
    </div>
  );
};
