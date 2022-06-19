import "./App.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

import { HEADING_DATA } from "./constants/data";
import Layouts from "./Components/Layouts";

const ALL_ROUTES = HEADING_DATA.map((data, index) => {
  return <Route path={data.link} element={<Layouts {...data} />} key={index} />;
});

function Abcd() {
  return (
    <div style={{ padding: "100px" }}>
      Hello
      <hr />
      Work In Progress
      <hr />
      404 Not Found
    </div>
  );
}
function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        {ALL_ROUTES}
        <Route path="*" element={<Abcd />} />
      </Routes>
    </Fragment>
  );
}

export default App;
