import React from "react";
import LocalIcon from "../../img/icons/localIcon.png";
import HeartIcon from "../../img/icons/heartIcon.png";


export const ArtistList = ({ artists }) => {
  return <div>
      {artists.map((artist) => (
        <div className="profileCard">
          <div>
            <img src={artist.profile_pic} className="imgProfileMin" alt="img profile" />{" "}
          </div>
          <div className="descriptionProfileMin">
            <div className="nameMin">
              <h5>{artist.nameLastName}</h5>
            </div>
            <div className="descriptionMin">
              <p>{artist.description}</p>
            </div>
            <div className="iconsBottonCard">
              <div>
                <h6>
                  <span>
                    <img src={LocalIcon} className="logoIcon" alt="logo icon" />
                  </span>

                  {artist.region}
                </h6>
              </div>
              <div>
                <span>{artist.likesCount}</span>
                <img src={HeartIcon} className="logoIcon" alt="logo icon" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
};
