import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./search.module.css";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setQuery(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = {
      query,
    };
    try {
      const response = await api.post("/search", data);
      dispatch({
        type: "LIST_DATA_SENT",
        payload: { data: response.data.body.symbols },
      });
      navigate("/result");
      setQuery("");
    } catch (e) {
      console.log(e);
    }
    // "https://c883b05e-97a0-4b43-92f6-a3c0276c5f4e.mock.pstmn.io/getData" /search
  };

  return (
    <div className={classes.formdiv}>
      <form onSubmit={submitHandler}>
        <input
          className={classes.input}
          placeholder="Search Stock"
          type="text"
          label="search"
          value={query}
          onChange={inputHandler}
        ></input>
        <Button
          className={classes.submit}
          as="input"
          type="submit"
          value="Submit"
        />{" "}
      </form>
    </div>
  );
};

export default SearchBar;
