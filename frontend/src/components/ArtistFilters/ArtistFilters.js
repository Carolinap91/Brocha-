import Badge from "react-bootstrap/Badge";

import "./ArtistFilters.css";

export const ArtistFilters = ({
  activeFilters,
  onTypeArtChange,
  onRegionChange,
  disabled,
}) => {
  const artTypes = [
    "MANUALIDADES",
    "PINTURAS",
    "ILUSTRACIÓN",
    "GRAFFITI",
    "CERÁMICA",
  ];

  const handleArtTypeChange = (type) => {
    onTypeArtChange(type);
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    onRegionChange(region);
  };

  return (
    <>
      <div className="category-list">
        {artTypes.map((type, i) => {
          const isSelected = activeFilters["typeArt"] === type;
          return (
            <Badge
              key={i}
              className={isSelected ? "selected" : ""}
              disabled={disabled}
              pill
              onClick={() => handleArtTypeChange(type)}
            >
              {type}
            </Badge>
          );
        })}
      </div>

      <div>
        <select
          className="selectForm"
          name="region"
          form="regionform"
          value={activeFilters["region"]}
          disabled={disabled}
          onChange={handleRegionChange}
        >
          <option value="RM">RM</option>
          <option value="VALPARAISO">Valparaíso</option>
          <option value="LOS_LAGOS">Los Lagos</option>
        </select>
      </div>
    </>
  );
};
