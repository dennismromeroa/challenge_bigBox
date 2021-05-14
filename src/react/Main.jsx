import React from "react";
import { Switch, Route } from "react-router";

import HomeContainer from "./containers/HomeContainer";
import SingleBookContainer from "./containers/SingleBookContainer"
import Nabvar from "./containers/NabvarContainer";
import Footer from "./components/Footer"

const Main = () => {
  return (
    <>
      <Nabvar />
      <Switch>
        <Route exact path="/home" component={HomeContainer} />
        <Route exact path="/book" component={SingleBookContainer}/>
      </Switch>
      <Footer/>
    </>
  );
};

export default Main;
