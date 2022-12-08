import React from "react";
import "./hero.css";

import Nos_sandwichs from "../../images/traiteur.png";
import Nos_tacos from "../../images/traiteur-2.png";
import Nos_desserts from "../../images/traiteur-3.png";
import Carousel from "react-bootstrap/Carousel";


import { Link } from "react-router-dom";

const datas = [
  {
    en_tete: <span className="color">  Nos meilleures recettes  </span> ,
    sous_texte:
      " On s'adapte à tes envies, tout est permis !",
    texte:
    <p className='hero__text'> Chez Westing Café, on te propose des<span> Sandwichs</span> variés et gourmands avec plus de 15 recettes différentes et une tonne de suppléments au choix 🍔🥙 ! 
    Une seule volonté : te
    <span> SATISFAIRE 🚀</span> 
   
    </p>,
    
     
    
    images: [
      {
        'nom': Nos_sandwichs,
        'alt': 'nourriture',
      }
    ],
    alt: "commander",
    lien: { route: "/commander", nom: "Commander" },
  },
  {
    en_tete: <span className="color">  Nos meilleures recettes  </span> ,
    sous_texte:
    " On s'adapte à tes envies, tout est permis !",
    texte:
    <p className='hero__text'>Découvre nos<span> tacos </span> 
    purement French prêts à combler tous les appétits. Une galette de blé croustillante accompagnée de nos viandes au choix, nos crudités 🍅, nos frites 🍟et notre sauce fromagère maison 🧀.
    <span>Compose-le à ta sauce </span>! 😉

    </p>,
    images: [
      {
        'nom': Nos_tacos,
        'alt' : 'nourriture',
      },
    ],
    alt: "commander",
    lien: { route: "/commander", nom: "Commander" },
  },
  {
    en_tete: <span className="color">  Nos meilleures recettes  </span> ,
    sous_texte:
      "On s'adapte à tes envies, tout est permis !",
      texte:
      <p className='hero__text'> Le <span>smoothie</span> pour les passionnés de fruits 🍓🍍 ou un mélange onctueux pour les fans de <span>milkshakes</span> ?
      On a plein de 
      <span> desserts </span> surprenants pour rendre accro tes papilles !
      Tu n’as plus qu'à faire ton choix, ou tout prendre si t’es assez <span>gourmands</span> 😋 !

      
      </p>,
    images: [
      {
        'nom': Nos_desserts,
        'alt' : 'plat',
      },
    ],
    alt: "commander",
    lien: { route: "/commander", nom: "Commander" },
  },
];

const hero = () => {
  return (
    <>
      <div className='hero' id='hero'>
        <div className='hero__container'>
          <Carousel pause={false}>
            {datas.map((data) => (
              <Carousel.Item interval={5000} className='px-5' key={data.alt}>
                <div className='carousel__item'>
                  <div className='hero__hero'>
                    <div className='hero__hero-hadings'>

                    
                    <div className='hero__hero-image2'>
                      {data.images.map((image) => (
                          <img
                            key={image.nom}
                            className={`hero__image ${image.alt}`}
                            src={image.nom} 
                            alt={image.alt}                           
                          />                      
                      ))}
                    </div>
                     
                      <p className='hero__entete'>{data.en_tete}</p>
                      <p className='hero__subtext'>{data.sous_texte}</p>
                      {data.texte}

                      <Link to={data.lien.route} className='telecharger_btn'>
                        {data.lien.nom}
                      </Link>
                    </div>
                    
                    <div className='hero__hero-image'>
                      {data.images.map((image) => (
                          <img
                            key={image.nom}
                            className={`hero__image ${image.alt}`}
                            src={image.nom}
                            alt={image.alt}
                          />                      
                      ))}
                    </div>

                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default hero;