import SearchIcon from "../../../assets/images/icon-search.svg";

import classes from "./Form.module.css";
import darkClasses from "./DarkModeForm.module.css";

const Form = (props) => {
  return (
    <form className={!props.darkMode ? classes.form : darkClasses.form}>
      <input placeholder="keyboard" />
      <button className={classes.button}>
        <img src={SearchIcon} />
      </button>
    </form>
  );
};

export default Form;
