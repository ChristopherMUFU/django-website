import React from "react";
import "./team.css";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <div className="team" id="team">
      <div className="team_header">
        <div className="team__introduction">
          <h2 className="team_title">BIENVENUE CHEZ WESTING CAFE</h2>
          <p className="team_text">
            <strong>Ici, tout est permis !</strong><br></br>
            Viens découvrir la carte du Westing Café et déguste tous nos plats <strong><br></br>sans restriction !</strong>
          </p>
        </div>
      </div>
      <div className="command_button">
        <Link to="/commander" className="telecharger_btn values__button">
          Commander
        </Link>
      </div>
    </div>
  );
};

export default Presentation;