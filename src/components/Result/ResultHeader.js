import PlayIcon from "../../assets/images/icon-play.svg";

import classes from "./ResultHeader.module.css";

const ResultHeader = () => {
  return (
    <header className={classes.header}>
      <div>
        <h1>keyboard</h1>
        <span className={classes.phonetic}>/ˈkiːbɔːd/</span>
      </div>
      <button className={classes.button}>
        <img src={PlayIcon} />
      </button>
    </header>
  );
};

export default ResultHeader;
