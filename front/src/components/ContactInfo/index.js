import React from "react";
import "./values.css";

const ContactInfo = () => {
  return (
    <div className="values" id="values">
      <div className="values_figure">
        <div className="values__container">
          <h2 className="values__descrih2tion">Nos horaires</h2>
          <p>Du lundi au dimanche</p>
          <p>De 11h à 00h</p>
        </div>

        <div className="values__container">
          <h2 className="values__descrih2tion">Contact</h2>
          <a class="footer-link" href="tel:01 49 51 42 71"><p>01 49 51 42 71</p></a>
          <span>01 49 51 42 71</span>
        </div>

        <div className="values__container">
          <h2 className="values__descrih2tion">Nous retrouver</h2>
          <a 
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.fr/maps/place/Westing+Caf%C3%A9/@48.9256174,2.5188273,17z/data=!3m2!4b1!5s0x47e6138f75c6e67f:0x351221aef5b6ec39!4m5!3m4!1s0x47e613c92b989fd9:0x2ddacb69074712b1!8m2!3d48.9256139!4d2.5210213"                    
                      >
          <p>2 bd Westinghouse</p>
          <p>93270 Sevran</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
