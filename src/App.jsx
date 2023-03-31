import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="w-3/4 m-auto">
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
