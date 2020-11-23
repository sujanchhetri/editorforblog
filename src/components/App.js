import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Editor from "./Editor";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
      <div className="main-body">
        <Header />
        <Editor />
      </div>
    );
}

export default App;
