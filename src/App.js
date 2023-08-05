import Header from "./components/UI/Header/Header";
import Form from "./components/Layout/Form/Form";
import Result from "./components/Result/Result";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Form></Form>
        <Result></Result>
      </main>
    </div>
  );
};

export default App;
