import { Fragment } from "react";

import IconMoon from "../../../assets/images/icon-moon.svg";

import classes from "./HeaderThemesSwitcher.module.css";

const HeaderThemesSwitcher = () => {
  return (
    <Fragment>
      <button className={classes.button}>
        <span></span>
      </button>
      <span className={classes.icon}>
        <img src={IconMoon} />
      </span>
    </Fragment>
  );
};

export default HeaderThemesSwitcher;
