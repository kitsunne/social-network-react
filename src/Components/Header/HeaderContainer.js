import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserDataActionCreator } from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/auth/me",
        headers: {
          "API-KEY": "5ae6a172-bcb6-4f46-826d-8b775acdebe4",
        },
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;

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
