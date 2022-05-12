import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import UsersContainer from "./Components/Profile/UsersPage/UsersContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route exact path="/profile/:userId" element={<ProfileContainer />} />
          <Route exact path="/users" element={<UsersContainer />} />
          <Route exact path="/dialogs" element={<DialogsContainer />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
