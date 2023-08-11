import classes from "./ResultMeaning.module.css";

const ResultMeaning = (props) => {
  let darkmodeClass = props.darkMode ? classes.darkmode : "";

  return (
    <>
      {props.meanings.map((meaning, index) => (
        <article className={classes.meaning} key={index}>
          <h2 className={`${classes.title} ${darkmodeClass}`}>
            {meaning.partOfSpeech}
            <span></span>
          </h2>
          <p className={`${classes.subTitle} ${darkmodeClass}`}>Meaning</p>
          <ul className={classes.definitions}>
            {meaning.definitions.map((definition, index) => (
              <li key={index}>
                <span>{definition.definition}</span>
                {definition.example && (
                  <span className={classes.example}>{definition.example}</span>
                )}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
};
export default ResultMeaning;
