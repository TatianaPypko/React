import React from "react";
import logo from "./logo.svg";
import "./index.css";
import Header from "./components/Header";
import LeftBlock from "./components/LeftBlock";
import Main from "./components/Main";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="flex">
          <LeftBlock />
          <Main />
        </div>
      </div>
    );
  }
}
