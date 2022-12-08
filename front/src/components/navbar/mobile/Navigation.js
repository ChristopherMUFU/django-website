import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavLink } from "react-router-dom";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({
  toggleOpen,
  navLinks,
  activeButton,
  setActiveButton,
}) => {

  return (
    <motion.ul variants={variants}>
          {navLinks.map(({ path, id, nom }) => {
            return (
              <MenuItem
                toggleOpen={toggleOpen}
                key={nom}
                path={path}
                nom={nom}
                id={id}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            );
          })}        
    </motion.ul>
  );
};
