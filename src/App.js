import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./screens/Contact";
import Layout from "./containers/Layout";

const App = () => {
  return (
    <>
      <Switch>
        <Route
          path="/about"
          render={() => (
            <Layout>
              <About />
            </Layout>
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <Layout>
              <Contact />
            </Layout>
          )}
        />
        <Route
          path="/"
          render={() => (
            <Layout>
              <Home />
            </Layout>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
