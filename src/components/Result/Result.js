import { Fragment } from "react";

import ResultHeader from "./ResultHeader";
import ResultMeaning from "./ResultMeaning";
import classes from "./Result.module.css";

const Result = () => {
  return (
    <Fragment>
      <ResultHeader></ResultHeader>
      <main>
        <ResultMeaning></ResultMeaning>
      </main>
    </Fragment>
  );
};

export default Result;
