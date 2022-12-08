import React from "react";
import "./product.css";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import {
  incrementQauntite,
  decrementQauntite,
  deleteProduct,
} from "../../app/Redux-slices/basketsSlice";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { splitPrix, calculTotalSupplements } from "../../utilities";

const Products = ({
  nom,
  prix,
  quantite,
  prixTotal,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="product-list">
        <p className="product--info-title">
          {quantite}x {nom}
        </p>
   
      </div>

      <div className="product--quantite">
        <IconButton
          onClick={() => {
            if (quantite > 0) {
              dispatch(decrementQauntite({ nom }));
            }
          }}
        >
          <RemoveIcon />
        </IconButton>

        <span>{quantite}</span>

        <IconButton onClick={() => dispatch(incrementQauntite({ nom }))}>
          <AddIcon />
        </IconButton>
      </div>

      <p className="product--info-prix">{prixTotal?splitPrix(prixTotal * quantite):splitPrix(prix * quantite)}</p>

      <DeleteIcon
        className="delete__product"
        onClick={() => dispatch(deleteProduct({ nom }))}
      />
    </div>
  );
};

export default Products;
