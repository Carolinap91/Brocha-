import React from "react";
import "./ArtistPic.css";


export const ArtistPic = (props) => {

const {artist} = props;
console.log('$$$$$$$$$$$$$$$$$$ artist', artist)
return (
    <div className="">
        <img className="artistPic" src={artist.profilePic} />
        <p className="hashtagsStyle"> {artist.hashtags}. </p>
    </div> 
    )
};