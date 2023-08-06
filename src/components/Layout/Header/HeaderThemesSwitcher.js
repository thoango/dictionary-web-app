import { Fragment } from "react";

import { ReactComponent as IconMoon } from "../../../assets/images/icon-moon.svg";

import classes from "./HeaderThemesSwitcher.module.css";
import darkClasses from "./DarkModeHeaderThemesSwitcher.module.css";

const HeaderThemesSwitcher = (props) => {
  return (
    <Fragment>
      <button
        className={!props.darkMode ? classes.button : darkClasses.button}
        onClick={props.onToggleDarkMode}
      >
        <span></span>
      </button>
      <span className={classes["icon-wrapper"]}>
        <IconMoon className={props.darkMode && darkClasses.icon} />
        {/* <img src={IconMoon} /> */}
      </span>
    </Fragment>
  );
};

export default HeaderThemesSwitcher;
