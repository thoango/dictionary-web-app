import classes from "./ResultHeader.module.css";

const ResultHeader = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <h1>{props.word}</h1>
        <span className={classes.phonetic}>{props.phonetic}</span>
      </div>
      <button className={classes.button}>
        <span className={classes["icon-circle"]}></span>
        <span className={classes["icon-triangle"]}></span>
      </button>
    </header>
  );
};

export default ResultHeader;
