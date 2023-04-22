import React from "react";
import "./ArtistPhotos.css";


export const ArtistPhotos = (props) => {

const {artist} = props;

return (
    <div className="artistPhotos">
        {artist.images.map((image)=> (<img className="" src={image} alt="artist work" />))}
    </div> 
    )
};