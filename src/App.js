import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/headerFooter/Header";

import Acceuil from "./Components/Pages/Acceuil";
import Apropos from "./Components/Pages/Apropos";
import Tournoi from "./Components/Pages/Tournoi";
import Contact from "./Components/Pages/Contact";
import Connexion from "./Components/Pages/Connexion";
import Inscription from "./Components/Pages/Inscription";
Function App(){
 return (
   line4
      <Router>
        <Header />
        <Route exact path="/" component={Acceuil} />
        <Route exact path="/Apropos" component={Apropos} />
        <Route exact path="/Tournoi" component={Tournoi} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Connexion" component={Connexion} />
        <Route exact path="/Inscription" component={Inscription} />
      </Router>
    );
 
}

export default App;
