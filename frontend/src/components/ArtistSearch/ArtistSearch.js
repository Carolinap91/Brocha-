import React from "react";
import Artist from "../../img/imgArtistas/img1.jpg"
import { ArtistFilters, ArtistList } from "..";

export const ArtistSearch = () => {
    // const [filters, setFilters] = useState({category: 'manualidades', region: 'RM})
    // const [artists, isLoading, error] = useArtists(filters)
    const yane = {
        nameLastName: "Yane Portillo",
        email: "yane@reveware.com",
        birthdate: new Date("11/01/1991"),
        description: "3D master",
        instagramLink: "@yane",
        profile_pic: Artist,
        images: [],
        likesCount: 13,
        typeArt: "manualidades",
        region: "RM",
        hstash: ["#love", "#cats"],
    }

    const riki = {
        nameLastName: "Ricardo Rincon",
        email: "riki@reveware.com",
        birthdate: new Date("09/25/1989"),
        description: "3D master",
        instagramLink: "@rrriki",
        profile_pic: Artist,
        images: [],
        likesCount: 13,
        typeArt: "graffiti",
        region: "RM",
        hstash: ["#love", "#dogs"],
    }

    const artists = [yane, riki];

    const handleCategorySelection = (category) => {
        alert(`category changed to ${category}`)
        // setFilters({...filters, category})
    }

    const handleRegionSelection = (region) => {
        alert(`region changed to ${region}`)
        // setFilters ({...filters, region})
    }
  return (
    <div>
      <div className="textTitle">
        <h3>ENCUENTRA UN ARTISTA LOCAL</h3>
      </div>
      <div className="navCategories">
        <ArtistFilters onCategoryChange={handleCategorySelection} onRegionChange={handleRegionSelection}  />
         <ArtistList artists={artists}/> 
      </div>
    </div>
  );
};
