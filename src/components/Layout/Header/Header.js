import HeaderFontsSwitcher from "./HeaderFontsSwitcher";
import HeaderThemesSwitcher from "./HeaderThemesSwitcher";

import LogoImage from "../../../assets/images/logo.svg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes["header-logo"]}>
        <img src={LogoImage} />
      </div>
      <nav className={classes["header-navbar"]}>
        <ul>
          <li className={`${classes.item} ${classes["fonts-switcher"]}`}>
            <HeaderFontsSwitcher
              darkMode={props.darkMode}
              onSelectFont={props.onSelectFont}
              font={props.font}
            ></HeaderFontsSwitcher>
          </li>
          <li className={classes.item}>
            <HeaderThemesSwitcher
              onToggleDarkMode={props.onToggleDarkMode}
              darkMode={props.darkMode}
            ></HeaderThemesSwitcher>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
