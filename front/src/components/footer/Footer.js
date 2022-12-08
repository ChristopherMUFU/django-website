import React from "react";
import { useLocation } from "react-router-dom";
import { Grid } from '@material-ui/core';
import "./footer.css";
import logo from "../../images/logo.png";
import Logo_Fb from '../../images/Logo_Fb.png';
import Logo_Insta from '../../images/Logo_Insta.png';

const Footer = () => {
  const location = useLocation();

  const regex = /^\/admin/g;
  //   ne pas afficher dans la page admin
  if (!location.pathname.match(regex)) {
    return (
      <div>
        <Grid container id="footer">
              <Grid container className="footer-logo-border" justifyContent="center" xs={12} md={2}>
                <a href="/#header">
                  <img src={logo} alt="logo"></img>
                </a>
              </Grid>
              <Grid container className="footer-text" direction="row" xs={12} md={10}>
                  <Grid xs={12} sm={4} md={4} id='grid_dimadelice'>
                    <h4>Westing Café</h4>
                    <p>
                      <a 
                        className="footer-link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.fr/maps/place/Westing+Caf%C3%A9/@48.9256174,2.5188273,17z/data=!3m2!4b1!5s0x47e6138f75c6e67f:0x351221aef5b6ec39!4m5!3m4!1s0x47e613c92b989fd9:0x2ddacb69074712b1!8m2!3d48.9256139!4d2.5210213"                    
                      >
                        2 bd Westinghouse,<br></br> 93270 Sevran
                      </a>
                    </p>
                  </Grid>
                  <Grid xs={12} sm={4} md={4}>
                    <h4>Mentions légales</h4>
                    <h4> CGV </h4>
                     
                  
                  </Grid>
                  
                  <Grid xs={12} sm={4} md={3}>
                    <h4>REJOIGNEZ-NOUS !</h4>
                    <p>
                      <a href="https://www.facebook.com/people/Westing-Caf%C3%A9/100078919354819/" target="_blank" rel="noreferrer" >
                        <img src={Logo_Fb}></img>
                      </a>
                       &nbsp; 
                      <a href="https://www.facebook.com/people/Westing-Caf%C3%A9/100078919354819/" target="_blank" rel="noreferrer" >
                      <img src={Logo_Insta}></img>
                      </a>
                    </p>
                  </Grid>
              </Grid>
            </Grid>
      </div>
    );
  }

  return null;
};

export default Footer;
