import { useEffect, useState } from "react";

import Header from "./components/Layout/Header/Header";
import Form from "./components/Layout/Form/Form";
import Result from "./components/Result/Result";
import Error from "./components/Layout/Error/Error";

import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontStyle, setFontStyle] = useState("sans-serif");
  const [keyword, setKeyword] = useState("keyboard");
  const [result, setResult] = useState();
  const [noResult, setNoResult] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const applyFontHandler = (font) => {
    setFontStyle(font);
  };

  const translateResult = (data) => {
    const result = {
      word: data.word,
      phonetic: data.phonetic,
      audio: data.phonetics.find((item) => item.audio).audio,
      meanings: data.meanings,
      sourceUrls: data.sourceUrls,
    };
    return result;
  };

  const fetchDataHandler = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setNoResult(true);
        }
      } else {
        const data = await response.json();
        const translatedData = translateResult(data[0]);
        setResult(translatedData);
        setNoResult(false);
      }
    } catch (error) {}
  };

  const searchKeywordHandler = (word) => {
    setKeyword(word);
  };

  useEffect(() => {
    fetchDataHandler();

    return () => {
      setResult(null);
    };
  }, [keyword]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  let fontFamily = "";
  if (fontStyle === "serif") {
    fontFamily = "serif";
  } else if (fontStyle === "mono") {
    fontFamily = "mono";
  }

  return (
    <div className={`App ${fontFamily}${darkMode ? " darkmode" : ""}`}>
      <div className="App-content">
        <Header
          onToggleDarkMode={toggleDarkMode}
          onSelectFont={applyFontHandler}
          darkMode={darkMode}
          font={fontStyle}
        ></Header>
        <main>
          <Form darkMode={darkMode} onSearch={searchKeywordHandler}></Form>
          {result && <Result darkMode={darkMode} result={result}></Result>}
          {noResult && <Error></Error>}
        </main>
      </div>
    </div>
  );
};

export default App;
