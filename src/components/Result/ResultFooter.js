import NewWindowIcon from "../../assets/images/icon-new-window.svg";

import classes from "./ResultFooter.module.css";
import darkClasses from "./DarkModeResultFooter.module.css";

const ResultFooter = (props) => {
  return (
    <footer className={!props.darkMode ? classes.footer : darkClasses.footer}>
      <span className={classes["footer-title"]}>Source</span>
      <a className={classes["footer-link"]}>
        https://en.wiktionary.org/wiki/keyboard
        <span className={classes["footer-icon"]}>
          <img src={NewWindowIcon} />
        </span>
      </a>
    </footer>
  );
};
export default ResultFooter;
