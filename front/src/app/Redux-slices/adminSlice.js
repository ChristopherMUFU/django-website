import React, { useEffect, useState } from "react";
import { createSlice } from "@reduxjs/toolkit";


export const Global_admin = () => {
    const [global_admin, setGlobal_admin] = useState(false);
}
// *  Writing the Slices
//+ createSlice returns a "slice" object that contains the generated reducer function as a field named reducer,
//+ and the generated action creators inside an object called actions.
export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    pages: [
      {
        name: "nouvelles_commandes",
        path: "/nouvelles-commandes",
        libelle: "Nouvelles commandes",
        active: false,
        icone: "fa-bullhorn",
      },
      {
        name: "commandes_encours",
        path: "/commande-en-cours",
        libelle: "Commandes en cours",
        icone: "fa-hourglass-start",
        active: false,
      },
      {
        name: "historique_commandes",
        path: "/historiques",
        libelle: "Historique des commandes",
        icone: "fa-clipboard-list",
        active: true,
      },
      {
        name: "suivi_activite",
        path: "/suivi-activites",
        libelle: "Suivi de l’activité",
        active: false,
        icone: "fa-chart-line",

      },
      {
        name: "disponibilite_livraison",
        path: "/disponibles-livraison",
        libelle: "Disponibilité livraison",
        icone: "fa-truck",
        active: false,
      },
     
      {
        name: "disponibilite_plats",
        path: "/disponibles-plats",
        libelle: "Disponibilité des plats",
        icone: "fa-utensils",
        active: false,
      },
      /*{
        name: "fichiers_contacts",
        path: "/fichiers-contacts",
        libelle: "Fichiers contacts",
        icone: "fa-address-book",
        active: false,
      },*/

      // {
      //   name: "clients",
      //   path: "/clients",
      //   libelle: "Base de données clients",
      //   icone: "fa-address-book",
      //   active: false,
      // },*/
    ],
    currentPage: "nouvelles_commandes",
    nouvelleCommandeLength: 0,
    commandeCoursLength: 0,
    refresh: false,
  },
  reducers: {
    changePage: (state, action) => {
      state.pages.forEach((page) => {
        if (page.name === action.payload) {
          page.active = true;
          state.currentPage = page.name;
        } else {
          page.active = false;
        }
      });
    },

    changenouvelleCommandeLength: (state, action) => {
      state.nouvelleCommandeLength = action.payload;
    },

    changeCommandeCoursLength: (state, action) => {
      state.commandeCoursLength = action.payload;
    },

    refreshContent: (state, action) => {
      state.refresh = !state.refresh;
    },
  },
});

//+ generated action creator functions :return an object with payload and type
export const {
  changePage,
  refreshContent,
  changenouvelleCommandeLength,
  changeCommandeCoursLength,
} = adminSlice.actions;

// pareil
// const { changePage } = adminSlice.actions;
// export { changePage };

// useSelector(state => state.admin) :returns the state for admin paegs
export const selectAdmin = (state) => state.admin;

// + the generated reducer function
export default adminSlice.reducer;
