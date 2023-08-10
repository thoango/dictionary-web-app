import { useState } from "react";
import SearchIcon from "../../../assets/images/icon-search.svg";

import classes from "./Form.module.css";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("");
  let darkmodeClass = props.darkMode ? classes.darkmode : "";

  const changeInputValueHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSearch(inputValue);
  };

  return (
    <form
      className={`${classes.form} ${darkmodeClass}`}
      onSubmit={submitHandler}
    >
      <input
        placeholder="Search for any word..."
        value={inputValue}
        onChange={changeInputValueHandler}
      />
      <button className={classes.button}>
        <span className={classes.imageWrap}>
          <img src={SearchIcon} />
        </span>
      </button>
    </form>
  );
};

export default Form;
