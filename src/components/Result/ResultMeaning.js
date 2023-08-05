import classes from "./ResultMeaning.module.css";

const ResultMeaning = () => {
  return (
    <article className={classes.meaning}>
      <h2 className={classes.title}>
        noun
        <span></span>
      </h2>
      <p>Meaning</p>
      <ul className={classes.definitions}>
        <li>
          (etc.) A set of keys used to operate a typewriter, computer etc.
        </li>
        <li>
          A component of many instruments including the piano, organ, and
          harpsichord consisting of usually black and white keys that cause
          different tones to be produced when struck.
        </li>
        <li>
          A device with keys of a musical keyboard, used to control electronic
          sound-producing devices which may be built into or separate from the
          keyboard device.
        </li>
      </ul>
      <p>
        <span>Synonyms</span>
        <span>electronic keyboard</span>
      </p>
    </article>
  );
};
export default ResultMeaning;
