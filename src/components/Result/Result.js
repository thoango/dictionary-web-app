import { Fragment } from "react";

import ResultHeader from "./ResultHeader";
import ResultMeaning from "./ResultMeaning";
import ResultFooter from "./ResultFooter";

const Result = (props) => {
  return (
    <Fragment>
      <ResultHeader
        word={props.result.word}
        phonetic={props.result.phonetic}
        audio={props.result.audio}
      ></ResultHeader>
      <main>
        <ResultMeaning
          darkMode={props.darkMode}
          meanings={props.result.meanings}
        ></ResultMeaning>
      </main>
      <ResultFooter
        darkMode={props.darkMode}
        sourceUrls={props.result.sourceUrls}
      ></ResultFooter>
    </Fragment>
  );
};

export default Result;
