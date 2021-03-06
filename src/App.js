import { React, Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import UsersContainer from "./Components/Profile/UsersPage/UsersContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer, {
  withRouter,
} from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Settings from "./Components/Settings/Settings";
import LoginPage from "./Components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/AppReducer";
import Loader from "./Components/Common/Loader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              exact
              path="/profile/:userId"
              element={<ProfileContainer />}
            />
            <Route exact path="/profile/" element={<ProfileContainer />} />
            <Route exact path="/users" element={<UsersContainer />} />
            <Route exact path="/dialogs" element={<DialogsContainer />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/music" element={<Music />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  })
)(App);
