import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Switch, Router, Route } from "react-router-dom";
import routes from "./routes.js";
import { createBrowserHistory } from "history";
import Header from "./Header";
import "./styles.css";

import * as firebase from "firebase";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);


export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);


  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router history={createBrowserHistory()}>
          <Header />

          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
