import { useState } from "react";
import SearchIcon from "../../../assets/images/icon-search.svg";

import classes from "./Form.module.css";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [blankInput, setBlankInput] = useState(false);
  let darkmodeClass = props.darkMode ? classes.darkmode : "";

  const changeInputValueHandler = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim().length === 0) {
      setBlankInput(true);
    } else {
      setBlankInput(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length === 0) {
      return;
    }
    props.onSearch(inputValue);
    event.target[0].blur();
  };

  return (
    <form
      className={`${classes.form} ${darkmodeClass} ${
        blankInput ? classes.error : null
      }`}
      onSubmit={submitHandler}
    >
      <input
        placeholder="Search for any word..."
        value={inputValue}
        onChange={changeInputValueHandler}
      />
      {blankInput && (
        <p className={classes.errorMessage}>Whoops, can’t be empty…</p>
      )}
      <button className={classes.button}>
        <span className={classes.imageWrap}>
          <img src={SearchIcon} />
        </span>
      </button>
    </form>
  );
};

export default Form;
