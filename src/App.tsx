import React from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar/sidebar";
import { X, Square } from "@phosphor-icons/react";
import { InfoWrapper } from "./components/InfoWrapper/infowrapper";
import { UserWrapper } from "./components/UserWrapper/userwrapper";
import { TextWrapper } from "./components/TextWrapper/textwrapper";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <p className="HeaderTitle">Discord</p>
        <div className="HeaderBtns">
          <div className="HeaderBtn HeaderMinimize">
            <p>_</p>
          </div>
          <div className="HeaderBtn HeaderMaximize">
            <Square weight="regular" />
          </div>
          <div className="HeaderBtn HeaderClose">
            <X weight="regular" />
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <Sidebar />
        <div className="LeftWrapper">
          <InfoWrapper />
          <UserWrapper />
        </div>
        <TextWrapper />
      </div>
    </div>
  );
}

export default App;
