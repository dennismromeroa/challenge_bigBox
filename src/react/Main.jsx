import React from "react";
import { Switch, Route, Redirect } from "react-router";

import HomeContainer from "./containers/HomeContainer";
import Nabvar from "./containers/NabvarContainer";
import Footer from "./components/Footer"

const Main = () => {
  return (
    <>
      <Nabvar />
      <Switch>
        <Route exact path="/home" component={HomeContainer} />
        <Redirect to="/home"/>
      </Switch>
      <Footer/>
    </>
  );
};

export default Main;
