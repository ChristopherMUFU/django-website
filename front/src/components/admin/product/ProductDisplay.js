import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../../middlewares/request";
import "./productDisplay.css";

const ProductDisplay = ({ idPanierItem }) => {
  const [panierItem, setPanierItem] = useState(null);

  const fetchPanierItem = async () => {
    const { data } = await axios.get(URL + "paiement/produits/" + idPanierItem);
    setPanierItem(data);
  };

  useEffect(() => {
    fetchPanierItem();
  }, []);

  useEffect(() => {
    console.log(`panierItem`, panierItem);
  }, [panierItem]);

  return (
    <div>
      {panierItem ? (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="title-details">
              {panierItem.quantite}x {panierItem.produit.nom}{" "}
            </p>
          </div>
        </div>
      ) : (
        <p>Erreur, panier pas reçu</p>
      )}
    </div>
  );
};

export default ProductDisplay;
