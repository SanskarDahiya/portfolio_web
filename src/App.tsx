import "./App.css";
import { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

import { HEADING_DATA } from "./constants/data";
import Layouts from "./Components/Layouts";
import Footer from "./Components/Footer";

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
    <Routes>
      {ALL_ROUTES}
      <Route path="*" element={<Abcd />} />
    </Routes>
  );
}

class AppError extends Component {
  state: { hasError: boolean; error?: string };
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: { message: string }) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.message };
  }

  componentDidCatch() {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    let Element;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      Element = (
        <footer className="footer_area">
          <div className="container">
            <div
              className="col justify-content-center"
              style={{
                paddingTop: "50px"
              }}
            >
              <h3 className="row justify-content-center">Something went wrong.</h3>
              {this.state.error && <h6 className="row justify-content-center">{this.state.error}</h6>}
            </div>
          </div>
        </footer>
      );
    } else {
      Element = <App {...this.props} />;
    }
    return (
      <Fragment>
        <Header />
        {Element}
        <Footer />
      </Fragment>
    );
  }
}

export default AppError;
