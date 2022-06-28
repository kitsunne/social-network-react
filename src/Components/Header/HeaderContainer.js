import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserDataActionCreator } from "../../Redux/authReducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setAuthUserDataActionCreator(id, login, email);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  setAuthUserDataActionCreator,
})(HeaderContainer);
