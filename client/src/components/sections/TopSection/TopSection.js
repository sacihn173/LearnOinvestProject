import React from "react";
import NavBar from "../../NavBar/NavBar";
import SearchBar from "../../SearchBar/SearchBar";
import classes from "./TopSetion.module.css";

const TopSection = () => {
  return (
    <div className={classes.top}>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
    </div>
  );
};

export default TopSection;
