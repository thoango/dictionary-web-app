import { Fragment, useState } from "react";

import IconArrowDown from "../../../assets/images/icon-arrow-down.svg";

import classes from "./HeaderFontsSwitcher.module.css";

const HeaderFontsSwitcher = (props) => {
  const [overlayShowed, setOverlayShowed] = useState(false);

  const toggleOverlay = () => {
    setOverlayShowed((prevState) => !prevState);
  };

  const selectFontStyleHandler = (font) => {
    props.onSelectFont(font);
  };

  let showClass = overlayShowed ? classes["is-showed"] : "";
  let darkmodeClass = props.darkMode ? classes.darkmode : "";

  let fontName = "Sans Serif";
  if (props.font === "serif") {
    fontName = "Serif";
  } else if (props.font === "mono") {
    fontName = "Mono";
  }

  return (
    <Fragment>
      <button className={classes.button} onClick={toggleOverlay}>
        <span className={classes["button-text"]}>{fontName}</span>
        <span className={classes["button-icon"]}>
          <img src={IconArrowDown} />
        </span>
      </button>
      <div className={`${classes.fonts} ${showClass} ${darkmodeClass}`}>
        <button
          className={classes["sans-serif"]}
          onClick={() => {
            selectFontStyleHandler("sans-serif");
          }}
        >
          <span>Sans Serif</span>
        </button>
        <button
          className={classes.serif}
          onClick={() => {
            selectFontStyleHandler("serif");
          }}
        >
          <span>Serif</span>
        </button>
        <button
          className={classes.mono}
          onClick={() => {
            selectFontStyleHandler("mono");
          }}
        >
          <span>Mono</span>
        </button>
      </div>
    </Fragment>
  );
};

export default HeaderFontsSwitcher;
