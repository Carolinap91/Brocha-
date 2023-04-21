import Badge from "react-bootstrap/Badge";

import "./NavCategories.css";

export const ArtistFilters = ({ onCategoryChange, onRegionChange }) => {
  const categories = [
    "MANUALIDADES",
    "PINTURAS",
    "ILUSTRACIÓN",
    "GRAFFITI",
    "CERÁMICA",
  ];

  return (
    <>
      <div className="category-list">
        {categories.map((category) => (
          <Badge pill onClick={() => onCategoryChange(category)}>
            {category}
          </Badge>
        ))}
      </div>

      <div>
        <select
          className="selectForm"
          name="region"
          form="regionform"
          onChange={(e) => onRegionChange(e.target.value)}
        >
          <option value="RM">RM</option>
          <option value="VALPARAISO">Valparaíso</option>
          <option value="LOS_LAGOS">Los Lagos</option>
        </select>
      </div>
    </>
  );
};
