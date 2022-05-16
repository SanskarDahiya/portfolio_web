import "./App.css";
import React, { useState } from "react";
import ContextHOC from "./Helper/ContextProvider";
import { Header } from "./Components/HeaderSection";
import MainDetail from "./Components/MainDetail";
import LeftSideBar from "./Components/LeftSideBar";

const { Context, data } = ContextHOC();

function App() {
  const [user] = useState(data);
  return (
    <Context.Provider value={user}>
      <div style={{ position: "relative", margin: "0 20px" }}>
        <Header />
        <LeftSideBar />
        <div className="App">
          <MainDetail />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
