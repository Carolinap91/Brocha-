import React from "react";
import { useNavigate } from "react-router-dom";
import LocalIcon from "../../img/icons/localIcon.png";
import HeartIcon from "../../img/icons/heartIcon.png";
import "./ArtistList.css";

export const ArtistList = (props) => {
  const { artists } = props;
  const navigate = useNavigate()

  const handleArtistClick = (artist)=>{
    navigate(`/users/${artist._id}`)
  };

  return (
    <div>
      {artists.map((artist, i) => (
        <div className="profileCard" key={i} onClick={()=> {handleArtistClick(artist)}}>
          <div className="profilePic">
            <img src={artist.profilePic} alt="img profile" />
          </div>
          <div className="profileOverview">
            <h5>{artist.name}</h5>
            <div className="profileDescription">
              <p>{artist.description}</p>
            </div>
            <div className="profileDetails">
              <div>
                <span>{artist.region}</span>
                <img src={LocalIcon} className="logoIcon" alt="logo icon" />
              </div>
              <div>
                <span>{artist.likesCount || 0}</span>
                <img src={HeartIcon} className="logoIcon" alt="logo icon" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
