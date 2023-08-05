import SearchIcon from "../../../assets/images/icon-search.svg";

import classes from "./Form.module.css";

const Form = () => {
  return (
    <form className={classes.form}>
      <input placeholder="keyboard" />
      <button className={classes.button}>
        <img src={SearchIcon} />
      </button>
    </form>
  );
};

export default Form;
