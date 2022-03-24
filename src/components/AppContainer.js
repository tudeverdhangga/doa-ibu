import React from "react";
import { FaHome, IconName } from "react-icons/fa";
import NavBar from "./NavBar";
import FooterBar from "./FooterBar";
import { useLocation, Redirect } from "react-router-dom";
import {Button} from "@mui/material";

const AppContainer = (props) => {
  const location = useLocation();
  const [title, setTitle] = React.useState("");

  const getPathName = (path) => {
    let lastPart = path.split("/");
    let pathName = lastPart.reduce(function (a, b) {
      //get longest string in element of path
      return a.length > b.length ? a : b;
    });
    pathName = pathName.split("-");

    for (let i = 0; i < pathName.length; i++) {
      pathName[i] = pathName[i].charAt(0).toUpperCase() + pathName[i].slice(1);
    }

    return pathName.join(" ");
  };

  return (
    <div>
      <h1>Content</h1>
    </div>
  );
};

export default AppContainer;
