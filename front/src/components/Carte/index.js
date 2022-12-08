import { useState } from "react";
import carteImg from "../../images/logo.png";

import "./carte.css";

const Carte = ({
  setActive,
  active,
  activeCarte,
  setActiveCarte,
  categories,
  setDishesDisplay,
}) => {
  const createCategoriesList = categories.map((category) => ({
    libelle: category.nom,
    nom: category.nom,
    id: category.id,
  }));

  const [carte, setCarte] = useState(createCategoriesList);

  return (
    <div className={"carte " + (activeCarte ? "active" : null)}>
      <div className="carte_contain">
        <div className="carte__image-container">
          <img src={carteImg} alt="Westing_Cafe_logo" />
        </div>

        <div className="carte__items">
          {carte.map((carte) => (
            <p
              key={carte.id}
              className={`carte__item ${active === carte.id ? "active" : ""}`}
              onClick={() => {
                setActive(carte.id);
                setActiveCarte(false);
                setDishesDisplay(false);
                window.scrollTo(0, 0);
              }}
            >
              {carte.libelle}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carte;
