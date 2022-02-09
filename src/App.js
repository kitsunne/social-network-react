import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/dialogs" element={<DialogsContainer />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
