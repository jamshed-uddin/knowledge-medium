import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="lg:w-3/4 m-auto">
        <Header></Header>
        <Main></Main>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
