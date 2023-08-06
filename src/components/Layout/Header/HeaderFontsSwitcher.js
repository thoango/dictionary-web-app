import { useState } from "react";

import IconArrowDown from "../../../assets/images/icon-arrow-down.svg";

import classes from "./HeaderFontsSwitcher.module.css";

const HeaderFontsSwitcher = () => {
  const [overlayShowed, setOverlayShowed] = useState(false);

  const toggleOverlay = () => {
    setOverlayShowed((prevState) => !prevState);
  };

  return (
    <button className={classes.button} onClick={toggleOverlay}>
      <span className={classes["button-text"]}>Sans Serif</span>
      <span className={classes["button-icon"]}>
        <img src={IconArrowDown} />
      </span>
      <ul
        className={`${overlayShowed && classes["is-showed"]} ${classes.fonts}`}
      >
        <li className={classes["sans-serif"]}>
          <span>Sans Serif</span>
        </li>
        <li className={classes.serif}>
          <span>Serif</span>
        </li>
        <li className={classes.mono}>
          <span>Mono</span>
        </li>
      </ul>
    </button>
  );
};

export default HeaderFontsSwitcher;
