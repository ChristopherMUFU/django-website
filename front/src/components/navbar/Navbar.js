import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import { useLocation } from "react-router-dom";
import NavMobile from "./mobile/NavMobile";
import { NavLink } from "react-router-dom";
import { useNavBarStateValue } from "../../contexts/Navbar/navbarState";
import { SET_ACTIVE } from "../../contexts/Navbar/actiontypes";
import { sendrequest } from "../../middlewares/request";

import { getNombresArticles, smoothScroll } from "../../utilities";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { useSelector } from "react-redux";
import { selectBaskets } from "../../app/Redux-slices/basketsSlice";
import { IconButton } from "@material-ui/core";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

//Two cases in the navbar :
// *Links in the homepage ('/'), but that need to be scrolled to
// *Links not in the homepage that need to redirected to

// Solution :
// * state activeButton that allows to define on which link we just have clicked, to display it as active (different color, thanks to a different className)

// * function findNavbarItemFromLocation that allows to find the location (after a refresh for exemple it's useful to know on which page we are) and will set the activeButton to the page we are on

//* A function smoothScroll that will scroll to the selected component on the homepage => used in the hook useEffect so that it's triggered after the component is mounted and the change of page is effective.

const NavBar = () => {
  const location = useLocation();
  const baskets = useSelector(selectBaskets);
  const { state, dispatch } = useNavBarStateValue();
  const activeButton = state["activeButton"];
  const [search, setSearch] = useState("/");
  const [isOpened, setOpening] = useState(undefined);
  const [isOpenedLoading, setOpeningLoading] = useState(false);

  const navLinks = [
    // {path : endpoint, id:'id du component auquel il faut scroller ou aller, nom: nom qui s'affiche dans la navbar}
    { path: "/", id:  "home", nom: "Accueil" },

    { path: "/", id: "slider", nom: "Restaurant" },

    { path: "/commander", id: "commander", nom: "Commander" },

  ];

  const createMobileNavbar = () => {
    const navMobileLinks = [...navLinks];
    navMobileLinks.push({ path: "/panier", id: "panier", nom: "Panier" });
    return navMobileLinks;
  };

  const navMobileLinks = createMobileNavbar();

  const setActiveButton = (navLinkActive) => {
    dispatch({
      navLinkActive,
      type: SET_ACTIVE,
    });
  };

  const changeNavBarItemOnClick = (navLinkId) => {
    const navLinkItem = navLinks.find((navLink) => navLinkId === navLink.id);
    if (navLinkItem === undefined) setActiveButton("panier");
    else setActiveButton(navLinkItem.id);
  };

  const changeNavBarItemOnLocation = (newLocation) => {
    const navLinkItem = navLinks.find(
      (navLink) => navLink.path === newLocation
    );
    if (navLinkItem === undefined) setActiveButton("panier");
    else {
      if (navLinkItem.path == "/") setActiveButton(activeButton);
      else setActiveButton(navLinkItem.id);
    }
  };

  const get_restaurant = async () => {
    sendrequest(
      "get",
      "restaurant/info_restaurant/",
      setOpening,
      setOpeningLoading
    );
  };

  console.log(setOpening)

  // Similaire au componentDidMount et componentDidUpdate :
  useEffect(() => {
    if (location.pathname !== search) {
      changeNavBarItemOnLocation(location.pathname);
      setSearch(location.pathname);
    }
    smoothScroll(activeButton);
  }, [location]);

  useState(() => get_restaurant());

  const regex = /^\/admin/g;
  if (!location.pathname.match(regex)) {
    return (
      <nav className="navbar" id="navbar">
        <div className="navbar__container">
          <div className="navbar__left-container">
            {/*HOME LOGO*/}
            <div className="navbar__logo-container">
              <NavLink to="/" key="home" exact>
                <img className="navbar__logo" src={logo} alt="Westing logo" />
              </NavLink>
            </div>

            {/*OUVERTURE FERMETURE*/}

            {isOpenedLoading && (
              <div className="navbar__restaurant-disponibility-container">
                <p className="navbar__restaurant-disponibility-indication">
                  {isOpened && isOpened[isOpened.length - 1].disponibilite_restaurant
                    ? "Ouvert"
                    : "Fermé"}
                </p>
                <div className="navbar__restaurant-disponibility-content">
                  <div
                    className={
                      isOpened[isOpened.length - 1].disponibilite_restaurant
                        ? "navbar__restaurant-disponibility-open"
                        : "navbar__restaurant-disponibility-close"
                    }
                  >
                    <p></p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="navbar__links">
            {/* ALL OTHER NAVLINKS */}

            {navLinks.map((navLink) => {
              return (
                <NavLink
                  to={navLink.path}
                  key={navLink.id}
                  exact
                  className={
                    activeButton === navLink.id
                      ? "navLink--active-navbar"
                      : "navLink--dormant"
                  }
                  onClick={() => {
                    changeNavBarItemOnClick(navLink.id);
                  }}
                >
                  {navLink.nom}
                </NavLink>
              );
            })}

            {/*CART*/}
            <NavLink
              to="/panier"
              key="panier"
              exact
              className={`navbar__links-basket basket ${
                activeButton === "panier"
                  ? "navLink--active-navbar"
                  : "navLink--dormant"
              }`}
              onClick={() => {
                changeNavBarItemOnClick("panier");
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button id="basket_btn">
                <span>{getNombresArticles(baskets)}</span>
                <i class="fas fa-shopping-cart"></i> PANIER
                
              </Button>
              
            </NavLink>
          </div>

          <NavMobile
            navLinks={navMobileLinks}
            activeButton={activeButton}
            setActiveButton={changeNavBarItemOnClick}
          />
        </div>
      </nav>
    );
  }

  return null;
};

export default NavBar;
