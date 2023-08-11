import classes from "./Error.module.css";

const Error = () => {
  return (
    <div className={classes.error}>
      <span className={classes["error-icon"]}>😕</span>
      <p className={classes["error-title"]}>No Definitions Found</p>
      <p className={classes["error-message"]}>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};
export default Error;
