import classes from "./ResultMeaning.module.css";
import darkClasses from "./DarkModeResultMeaning.module.css";

const ResultMeaning = (props) => {
  return (
    <article className={classes.meaning}>
      <h2 className={!props.darkMode ? classes.title : darkClasses.title}>
        noun
        <span></span>
      </h2>
      <p className={!props.darkMode ? classes.subTitle : darkClasses.subTitle}>
        Meaning
      </p>
      <ul className={classes.definitions}>
        <li>
          <span>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </span>
        </li>
        <li>
          <span>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </span>
        </li>
        <li>
          <span>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </span>
        </li>
      </ul>
    </article>
  );
};
export default ResultMeaning;
