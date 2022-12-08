import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import NavBarContextProvider from "./contexts/Navbar/navbarState";
import Home from "./pages/Home";
import Commander from "./pages/Commander";
import Panier from "./pages/Panier";
import Slider from "./pages/Slider";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";
import Alerts from "./components/alert/Alerts";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// + Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { sendrequest } from "./middlewares/request.js";
import Paiement from "./pages/Paiement";
import Felicitation from "./pages/Felicitation";
import Admin from "./pages/Admin";
import Login from "./components/admin/security/Login";
import SecuredRoute from "./middlewares/SecuredRout";


import CookieConsent from "react-cookie-consent";

// C'est pour identifier votre compte stripe
//const stripePromise = async () => loadStripe(getStripeAPIKey());

function App() {
  const [apiKey, setApiKey] = useState(null);
  const [isKeyLoaded, setIsKeyLoaded] = useState(false);
  const getAPIKeys = () => {
    sendrequest("get", "paiement/api/keys", setApiKey, setIsKeyLoaded);
  };

  useEffect(() => {
    getAPIKeys();
  }, []);
  const LoginContainer=()=><div><Route path="/login" component={Login} /></div>

  const DefaultContainer=()=>{
    return(
      <div>
        <NavBarContextProvider>
          <NavBar/>
          <Route exact path="/">
              <Home/>
              <Slider/>
              <Contact/>
            </Route>
            <Route exact path="/commander" component={Commander} />
            <Route exact path="/panier" component={Panier} />

            {isKeyLoaded && (
              <Route exact path="/paiement">
                <Elements stripe={loadStripe(apiKey[0].stripe_public_key)}>
                <Paiement />
                </Elements>
              </Route>
            )}

            <Route exact path="/felicitation" component={Felicitation} />
            <SecuredRoute  path="/admin" component={Admin} />
        </NavBarContextProvider>
        <Footer />
      </div>
    )
  }
 
  return (
    <div className="App">
      <Alerts />

      <CookieConsent
        enableDeclineButton
        buttonText="J'accepte"
        declineButtonText="Je refuse"
      >
        Ce site utilise des cookies pour améliorer votre expérience.
      </CookieConsent>
      <Router>
         <Switch>
            <Route exact path="/login" component={LoginContainer}/>
            <Route component={DefaultContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
