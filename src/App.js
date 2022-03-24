
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { APP_ROUTE } from "./routes/route";
import logo from './logo.svg';
import './App.css';
import AppContainer from "./components/AppContainer";
import AboutPage from "./pages/about";
import AcademicPage from "./pages/academic";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<AppContainer />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academic" element={<AcademicPage />} />
        {/*{APP_ROUTE.map((value, index) => {*/}
        {/*  return (*/}
        {/*    <PublicRoute*/}
        {/*      key={value.name}*/}
        {/*      restricted={value.restricted}*/}
        {/*      path={value.path}*/}
        {/*      component={value.component}*/}
        {/*      exact={value.exact}*/}
        {/*      isNotFound={value.isNotFound}*/}
        {/*    />*/}
        {/*  );*/}
        {/*})}*/}
      </Routes>
    </Router>
  );
}

export default App;
