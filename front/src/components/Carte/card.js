import { useState } from "react";
import "./card.css";

import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/Redux-slices/basketsSlice";
import { addAlert } from "../../app/Redux-slices/alertsSlice";

import { Button, IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { splitPrix } from "../../utilities";

import Modal from "../MyModal/Modal";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Card = ({
  nom,
  prix,
  id,
  description,
  categories,
  disponibilite,
  image,

}) => {
  const [show, setShow] = useState(false);
  const dispath = useDispatch();
  const [showButton, setShowButton] = useState(false);
  // const baskets = useSelector(selectBaskets)
  const [quantite, setQuantite] = useState(1);

  const handleClose = (e) => {
    // console.log(e.target.classList);

    if (
      e.target.classList.contains("myModal__backdrop") ||
      e.target.classList.contains("myModal__modal__close-btn") ||
      e.target.parentNode.classList.contains("myModal__modal__close-btn") ||
      e.target.parentNode.parentNode.classList.contains(
        "myModal__modal__close-btn"
      )
    ) {
      setShow(false);
      setShowButton(false);
    }
  };

  
  /* If the item is available, we can click to add it to the basket */
  const orderIfAvailable = () => {
      setShow(true);
  };

  // const Prix = splitPrix(prix);

  return (
    
    // Depending on the availability or not of the item, the css style will vary, thanks to a different className 
    <div className="card__command__container">
      <div    
        className={"card__item " + (!disponibilite ? "item_unavailable" : '')}
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
        onClick={() => orderIfAvailable()}
        >
        <h1 className='card__item__heading'>{nom}</h1>
        <div className='card__item__image-container'>
          <img src={image} alt={nom} />
        </div>
        <div className='card__item__details'>
          <p>
            {/* {Prix[0]}€{Prix[1]} */}
            {splitPrix(prix)}
          </p>               
        </div>
      </div>

      <div>
        <Modal showModal={show} setShowModal={setShow} handleClose={handleClose}>
          <Modal.Header>
            <h1>{nom}</h1>
            <img src={image} alt={nom} />
            <p>{splitPrix(prix)}</p>
          </Modal.Header>
          <Modal.Body>
            <Modal.Body.Heading>Ingrédients</Modal.Body.Heading>
            <p>{description}</p>          
          </Modal.Body>
          <Modal.Footer className="card__item__total__price">
            <Modal.Body.Heading>Prix Total</Modal.Body.Heading>
            <p>{(quantite * prix).toFixed(2)}€</p>
          </Modal.Footer>
          <Modal.Footer>
            <div
              style={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}>
              <IconButton
                style={{ margin: "0 5px" }}
                onClick={() => {
                  if (quantite > 0) {
                    setQuantite(quantite - 1);
                  }
                }}>
                <RemoveIcon />
              </IconButton>

              <span>{quantite}</span>

              <IconButton
                style={{ margin: "0 5px" }}
                onClick={() => setQuantite(quantite + 1)}>
                <AddIcon />
              </IconButton>
            </div>
            
             {/* If the item is non available, this will be displayed */}
            {!disponibilite && (
              <p>Produit non disponible</p>
            )}

            {disponibilite && (
              <Button
                disabled={quantite === 0}
                onClick={() => {
                  dispath(
                    addProduct({ nom, image, prix, id, quantite, categories })
                  );
                  dispath(addAlert({ nom, image, id: uuidv4() }));
                  setQuantite(1);
                  setShow(false);
                }}
                variant='contained'
                color='secondary'
                className='card__item__commander-btn'
                endIcon={<AddShoppingCartIcon style={{ fontSize: "25px" }} />}>
                Ajouter au panier
              </Button>
            )}

          </Modal.Footer>
        </Modal>
        {/* <ModalBootsrap
          nom={nom}
          img={img}
          show={show}
          handleClose={() => {
            setShow(false);
            setShowButton(false);
          }}>
          <h2>Ingredients</h2>
          <p>Boeuf</p>
          <p>Cheddar</p>
          <p>Salade</p>
        </ModalBootsrap> */}
      </div>
    </div>
  );
};

const ajoutBtn = {
  from: {
    opacity: 0,
    y: 20,
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },

  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

export default Card;
