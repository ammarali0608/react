import { Component } from "react";
import "./search-box.styles.css";
const SearchBox = (props) => (
  <input
    className={props.className}
    type="search"
    placeholder={props.placeholder}
    onChange={props.onChangeHandler}
  />
);

export default SearchBox;
