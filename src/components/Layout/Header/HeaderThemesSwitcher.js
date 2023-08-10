import { Fragment } from "react";

import { ReactComponent as IconMoon } from "../../../assets/images/icon-moon.svg";

import classes from "./HeaderThemesSwitcher.module.css";

const HeaderThemesSwitcher = (props) => {
  let darkmodeClass = props.darkMode ? classes.darkmode : "";

  return (
    <Fragment>
      <button
        className={`${classes.button} ${darkmodeClass}`}
        onClick={props.onToggleDarkMode}
      >
        <span></span>
      </button>
      <span className={classes["icon-wrapper"]}>
        <IconMoon className={`${classes.icon} ${darkmodeClass}`} />
      </span>
    </Fragment>
  );
};

export default HeaderThemesSwitcher;
