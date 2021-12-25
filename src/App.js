import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { LyricsContext } from "./context/LyricsContext";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import Lyrics from "./Lyrics";

class App extends React.Component {
  render() {
    return (
      <LyricsContext>
        <Router>
          <React.Fragment>
            <ToastContainer />
            <NavBar />
            <div className="container">
              <Routes>
                <Route exact path="/not-found" element={<NotFound />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/lyrics/track/:id" element={<Lyrics />} />
                <Route path="*" element={<Navigate to="/not-found" />} />
              </Routes>
            </div>
          </React.Fragment>
        </Router>
      </LyricsContext>
    );
  }
}

export default App;
