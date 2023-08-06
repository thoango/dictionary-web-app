import { useState } from "react";

import Header from "./components/Layout/Header/Header";
import Form from "./components/Layout/Form/Form";
import Result from "./components/Result/Result";

import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className={`App${darkMode && " darkmode"}`}>
      <div className="App-content">
        <Header onToggleDarkMode={toggleDarkMode} darkMode={darkMode}></Header>
        <main>
          <Form darkMode={darkMode}></Form>
          <Result darkMode={darkMode}></Result>
        </main>
      </div>
    </div>
  );
};

export default App;
