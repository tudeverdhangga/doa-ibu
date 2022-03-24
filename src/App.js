
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { APP_ROUTE } from "./routes/route";
import logo from './logo.svg';
import './App.css';
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Router>
    {APP_ROUTE.map((value, index) => {
      return (
        <PublicRoute
          key={value.name}
          restricted={value.restricted}
          path={value.path}
          component={value.component}
          exact={value.exact}
          isNotFound={value.isNotFound}
        />
      );
    })}
    </Router>
  );
}

export default App;
