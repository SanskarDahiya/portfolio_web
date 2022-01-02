import "./App.css";
import { useState } from "react";
import { Header } from "./HeaderSection";
import ContextHOC from "./contextFile";

const { Context, data } = ContextHOC();

function App(props) {
  const [state, setState] = useState(data);
  state.updateData = params => {
    // TODO: Need to add parser to modify data
    setState({ ...state, ...params });
  };
  return (
    <Context.Provider value={state}>
      <div className="App">
        <Header />
        <div className="App" style={{ flexDirection: "row", width: "100%" }}>
          <div style={{ display: "flex", flex: 3 }}></div>
          <Context.Consumer>
            {({ name, updateData }) => {
              // console.log("🚀 ~ file: App.js ~ line 18 ~ App ~ updateData", updateData);
              return (
                <div
                  style={{ display: "flex", flex: 7 }}
                  onClick={() => {
                    updateData({ name: name + 1 });
                  }}
                ></div>
              );
            }}
          </Context.Consumer>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
