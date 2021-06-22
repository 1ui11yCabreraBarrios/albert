import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movies from "./components/Movies";
import Pokemones from "./components/Pokemones";
import generateStore from "./Services/store";
import Save from "./components/Save";
import Veterinaria from "./components/Veterinaria";
import Particles from "react-particles-js";

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Router>
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        ></Particles>
        <div
          className="container mt-5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div className="btn-group">
            <Link to="/bla" className="btn btn-dark">
              Bla bla bla
            </Link>
            <Link to="/pokemones" className="btn btn-dark">
              Pokemones
            </Link>
            <Link to="/form" className="btn btn-dark">
              Veterinaria
            </Link>
          </div>
          <hr />

          <Switch>
            <Route path="/bla">
              <Movies />
            </Route>
            <Route path="/pokemones">
              <Pokemones />
            </Route>
            <Route path="/save">
              <Save />
            </Route>
            <Route path="/form">
              <Veterinaria />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
