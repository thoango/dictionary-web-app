import NewWindowIcon from "../../assets/images/icon-new-window.svg";

import classes from "./ResultFooter.module.css";

const ResultFooter = (props) => {
  let darkmodeClass = props.darkMode ? classes.darkmode : "";

  return (
    <footer className={`${classes.footer} ${darkmodeClass}`}>
      <span className={classes["footer-title"]}>Source</span>
      <a
        className={`${classes["footer-link"]} ${darkmodeClass}`}
        target="_blank"
        href={props.sourceUrls}
      >
        {props.sourceUrls}
        <span className={classes["footer-icon"]}>
          <img src={NewWindowIcon} />
        </span>
      </a>
    </footer>
  );
};
export default ResultFooter;
