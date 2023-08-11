import classes from "./ResultHeader.module.css";

const ResultHeader = (props) => {
  const playAudioHandler = () => {
    const audioElement = new Audio(props.audio);
    audioElement.play();
  };

  return (
    <header className={classes.header}>
      <div>
        <h1>{props.word}</h1>
        <span className={classes.phonetic}>{props.phonetic}</span>
      </div>
      <button className={classes.button} onClick={playAudioHandler}>
        <span className={classes["icon-circle"]}></span>
        <span className={classes["icon-triangle"]}></span>
      </button>
    </header>
  );
};

export default ResultHeader;
