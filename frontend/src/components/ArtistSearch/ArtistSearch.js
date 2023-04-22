import React, { useState } from "react";
import { ArtistFilters, ArtistList, Error, Spinner, NoArtistsFound } from "..";
import { useArtists } from "../../Hooks/useArtists";

export const ArtistSearch = () => {
  const [filters, setFilters] = useState({
    typeArt: "MANUALIDADES",
    region: "RM",
  });

  const { artists, isLoading, error } = useArtists(filters);

  const handleTypeArtSelection = (typeArt) => {
    setFilters({ ...filters, typeArt });
  };

  const handleRegionSelection = (region) => {
    setFilters({ ...filters, region });
  };

  if (error) {
    return <Error error={error} />;
  }
  return (
    <div>
      <div>
        <h3 className="tittleCol2">ENCUENTRA UN ARTISTA LOCAL</h3>
      </div>

      <React.Fragment>
        <div className="navCategories">
          <ArtistFilters
            activeFilters={filters}
            disabled={isLoading}
            onTypeArtChange={handleTypeArtSelection}
            onRegionChange={handleRegionSelection}
          />
          {isLoading ? (
            <Spinner />
          ) : artists.length === 0 ? (
            <NoArtistsFound />
          ) : (
            <ArtistList artists={artists} />
          )}
        </div>
      </React.Fragment>
    </div>
  );
};
