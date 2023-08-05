import IconArrowDown from "../../../assets/images/icon-arrow-down.svg";

import classes from "./HeaderFontsSwitcher.module.css";

const HeaderFontsSwitcher = () => {
  return (
    <button className={classes.button}>
      <span className={classes["button-text"]}>Sans Serif</span>
      <span className={classes["button-icon"]}>
        <img src={IconArrowDown} />
      </span>
    </button>
  );
};

export default HeaderFontsSwitcher;
