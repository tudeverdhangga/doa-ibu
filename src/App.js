
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
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import NewsDetailPage from "./pages/news";

function App() {
  return (
    <>
    <NavBar />
      <Router>
        <Routes>
            <Route path="/" element={<AppContainer />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academic" element={<AcademicPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
        </Routes>
      </Router>
    <FooterBar />
    </>
  );
}

export default App;
