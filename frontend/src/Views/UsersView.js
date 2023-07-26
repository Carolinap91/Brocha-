import React from "react";
import { useParams } from "react-router-dom";
import {
  ArtistView,
  ArtistPic,
  ArtistPhotos,
  Error,
  Spinner,
} from "../components";
import { useArtistDetail } from "../Hooks/useArtistDetail";
import "./UsersView.css";

export const UsersView = () => {
  const { id } = useParams();
  const { isLoading, error, artist } = useArtistDetail(id);

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!artist) {
    return;
  }

  return (
    <div class="container users-view">
      <div class="row">
        <div className="col-6">
          <ArtistView artist={artist} />
        </div>
        <div className="col-6">
          {" "}
          <ArtistPic artist={artist} />{" "}
        </div>
      </div>
      <hr />
      <div class="row">
        <div className="col-8">
          {" "}
          <ArtistPhotos artist={artist} />{" "}
        </div>
        <div className="col-4">{/* <ChatUser/> */} </div>
      </div>
    </div>
  );
};
