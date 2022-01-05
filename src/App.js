import "./App.css";
import { useState } from "react";
import ContextHOC from "./Helper/ContextProvider";
import { Header } from "./Components/HeaderSection";
import MainDetail from "./Components/MainDetail";
const { Context, data } = ContextHOC();

function App() {
  const [user] = useState(data);
  return (
    <Context.Provider value={user}>
      <Header />
      <div className="App">
        <MainDetail />
      </div>
    </Context.Provider>
  );
}

export default App;
